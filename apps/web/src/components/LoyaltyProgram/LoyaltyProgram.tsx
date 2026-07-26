import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Title,
  Text,
  Button,
  TextInput,
  Stack,
  Group,
  Paper,
  rem,
} from "@mantine/core";

/**
 * LoyaltyProgram
 * -----------------------------------------------------------------------
 * A single-page loyalty-card flow:
 *   1. "stamps"  -> intro headline + 10-circle stamp row that fills itself
 *                   one by one, ending in a celebration message.
 *   2. "form"    -> appears once the user taps "Join Loyalty Program".
 *                   Collects name / address / phone / email.
 *   3. "card"    -> the finished membership card, showing the customer's
 *                   name and their (already earned) stamp progress.
 *
 * Visual language: a physical "stamp card" — ink-stamp texture, a deep
 * evergreen + brass palette (instead of the usual AI cream/terracotta),
 * a slab serif for headings and a monospace face for card/stamp numerals
 * so it reads like something printed at a counter, not a SaaS dashboard.
 *
 * Drop this file into a Mantine v7 project. No extra deps required.
 * -----------------------------------------------------------------------
 */

const TOTAL_STAMPS = 9; // stamps a customer collects
const REWARD_INDEX = TOTAL_STAMPS; // 10th circle = the free-order reward

type Stage = "stamps" | "form" | "card";

interface CustomerDetails {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const PALETTE = {
  bg: "#F4EFE3", // aged paper
  ink: "#1E2B22", // deep evergreen-black
  brass: "#C9A227", // stamp / accent gold
  brassDark: "#96731A",
  cream: "#FBF8F1",
  line: "rgba(30, 43, 34, 0.18)",
};

export default function LoyaltyProgram() {
  const [stage, setStage] = useState<Stage>("stamps");
  const [filled, setFilled] = useState(0); // how many circles are filled, 0..10
  const [celebrated, setCelebrated] = useState(false);
  const [showJoinBtn, setShowJoinBtn] = useState(false);
  const [customer, setCustomer] = useState<CustomerDetails | null>(null);

  const [form, setForm] = useState<CustomerDetails>({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<CustomerDetails>>({});

  // Auto-play the stamp animation once, on mount.
  useEffect(() => {
    const STEP_MS = 1000; // time between each stamp
    const PAUSE_AFTER_MS = 2500; // how long to hold the celebration before looping

    let cancelled = false;
    const allTimers: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      if (cancelled) return;

      setFilled(0);
      setCelebrated(false);
      setShowJoinBtn(false);

      for (let i = 1; i <= REWARD_INDEX; i++) {
        const t = setTimeout(() => {
          if (cancelled) return;
          setFilled(i);
          if (i === REWARD_INDEX) {
            const t1 = setTimeout(() => !cancelled && setCelebrated(true), 250);
            const t2 = setTimeout(
              () => !cancelled && setShowJoinBtn(true),
              900,
            );
            allTimers.push(t1, t2);
          }
        }, i * STEP_MS);
        allTimers.push(t);
      }

      // total time for this cycle: fill time + hold time, then restart
      const cycleLength = REWARD_INDEX * STEP_MS + PAUSE_AFTER_MS;
      const restart = setTimeout(runCycle, cycleLength);
      allTimers.push(restart);
    }

    runCycle();

    return () => {
      cancelled = true;
      allTimers.forEach(clearTimeout);
    };
  }, []);

  const validate = (): boolean => {
    const next: Partial<CustomerDetails> = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!form.address.trim()) next.address = "Enter your address";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim()))
      next.phone = "Enter a valid phone number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Enter a valid email";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setCustomer(form);
    setStage("card");
  };

  return (
    <Box
      style={{
        minHeight: "90vh",
        background: PALETTE.bg,
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(30,43,34,0.06) 1px, transparent 0)",
        backgroundSize: "18px 18px",
        fontFamily: "'Georgia', 'Iowan Old Style', serif",
        color: PALETTE.ink,
        padding: `${rem(48)} ${rem(20)}`,
      }}
    >
      <Container size={520}>
        {stage === "stamps" && (
          <StampsView
            filled={filled}
            celebrated={celebrated}
            showJoinBtn={showJoinBtn}
            onJoin={() => setStage("form")}
          />
        )}

        {stage === "form" && (
          <JoinForm
            form={form}
            errors={errors}
            onChange={(field, value) =>
              setForm((f) => ({ ...f, [field]: value }))
            }
            onBack={() => setStage("stamps")}
            onSubmit={handleSubmit}
          />
        )}

        {stage === "card" && customer && (
          <MembershipCard customer={customer} stampsEarned={TOTAL_STAMPS} />
        )}
      </Container>

      <style>{`
        @keyframes stampPop {
          0%   { transform: scale(0.3) rotate(-8deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(2deg); opacity: 1; }
          100% { transform: scale(1) rotate(-3deg); opacity: 1; }
        }
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringPulse {
          0%   { box-shadow: 0 0 0 0 rgba(201,162,39,0.45); }
          100% { box-shadow: 0 0 0 14px rgba(201,162,39,0); }
        }
      `}</style>
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Stage 1 — stamp row + celebration                                   */
/* ------------------------------------------------------------------ */

function StampsView({
  filled,
  celebrated,
  showJoinBtn,
  onJoin,
}: {
  filled: number;
  celebrated: boolean;
  showJoinBtn: boolean;
  onJoin: () => void;
}) {
  return (
    <Stack align="center" gap={rem(28)}>
      <Stack align="center" gap={4}>
        <Text
          tt="uppercase"
          fw={600}
          size="xs"
          style={{ letterSpacing: rem(3), color: PALETTE.brassDark }}
        >
          Downtown Smoothie
        </Text>
        <Title
          order={1}
          ta="center"
          style={{
            fontFamily: "'Georgia', serif",
            fontWeight: 700,
            fontSize: rem(34),
            lineHeight: 1.15,
          }}
        >
          Welcome to the Loyalty Card Program
        </Title>
        <Text ta="center" c="dimmed" maw={380} mt={4}>
          Collect {TOTAL_STAMPS} stamps and your {TOTAL_STAMPS + 1}
          {ordinalSuffix(TOTAL_STAMPS + 1)} order is FREE.
        </Text>
      </Stack>

      <Paper
        withBorder
        radius="lg"
        p={rem(24)}
        style={{
          background: PALETTE.cream,
          borderColor: PALETTE.line,
          borderWidth: 1.5,
          width: "100%",
        }}
      >
        <Group justify="center" gap={rem(12)} wrap="wrap">
          {Array.from({ length: REWARD_INDEX + 1 }).map((_, i) => {
            const isReward = i === REWARD_INDEX;
            const isFilled = i < filled;
            return (
              <StampCircle
                key={i}
                index={i}
                isReward={isReward}
                isFilled={isFilled}
              />
            );
          })}
        </Group>
      </Paper>

      <Box
        style={{
          minHeight: rem(46),
          textAlign: "center",
          opacity: 1,
          animation: celebrated ? "fadeUp 0.5s ease both" : undefined,
        }}
      >
        <Text fw={700} size="lg" style={{ color: PALETTE.brassDark }}>
          🎉 You unlocked your free order!
        </Text>
        <Text size="sm" c="dimmed">
          Join now so we can save this progress to your account.
        </Text>
      </Box>

      <Button
        size="md"
        radius="md"
        onClick={onJoin}
        style={{
          background: PALETTE.ink,
          color: PALETTE.cream,
          opacity: 1,
          transform: showJoinBtn ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          pointerEvents: "auto",
        }}
      >
        Join Loyalty Program
      </Button>
    </Stack>
  );
}

function StampCircle({
  index,
  isReward,
  isFilled,
}: {
  index: number;
  isReward: boolean;
  isFilled: boolean;
}) {
  const size = rem(46);
  return (
    <Box
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `2px ${isReward ? "dashed" : "solid"} ${
          isFilled ? PALETTE.brass : PALETTE.line
        }`,
        background: isFilled
          ? isReward
            ? PALETTE.brass
            : "rgba(201,162,39,0.14)"
          : "transparent",
        color: isFilled && isReward ? PALETTE.cream : PALETTE.ink,
        fontFamily: "'Courier New', monospace",
        fontWeight: 700,
        fontSize: rem(15),
        animation: isFilled ? "stampPop 0.35s ease both" : undefined,
        boxShadow: isFilled && isReward ? undefined : undefined,
        position: "relative",
      }}
    >
      {isFilled ? (isReward ? "★" : index + 1) : isReward ? "🎁" : ""}
    </Box>
  );
}

/* ------------------------------------------------------------------ */
/* Stage 2 — join form                                                 */
/* ------------------------------------------------------------------ */

function JoinForm({
  form,
  errors,
  onChange,
  onBack,
  onSubmit,
}: {
  form: CustomerDetails;
  errors: Partial<CustomerDetails>;
  onChange: (field: keyof CustomerDetails, value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <Paper
      withBorder
      radius="lg"
      p={rem(28)}
      style={{
        background: PALETTE.cream,
        borderColor: PALETTE.line,
        borderWidth: 1.5,
        animation: "fadeUp 0.4s ease both",
      }}
    >
      <Stack gap={rem(16)}>
        <Stack gap={2}>
          <Text
            tt="uppercase"
            fw={600}
            size="xs"
            style={{ letterSpacing: rem(3), color: PALETTE.brassDark }}
          >
            One last step
          </Text>
          <Title order={2} style={{ fontSize: rem(24) }}>
            Tell us where to find you
          </Title>
          <Text size="sm" c="dimmed">
            We'll create your card with the {TOTAL_STAMPS + 1} stamps count.
          </Text>
        </Stack>

        <TextInput
          label="Full name"
          placeholder="name"
          value={form.name}
          error={errors.name}
          onChange={(e) => onChange("name", e.currentTarget.value)}
        />
        <TextInput
          label="Address"
          placeholder="Address"
          value={form.address}
          error={errors.address}
          onChange={(e) => onChange("address", e.currentTarget.value)}
        />
        <Group grow>
          <TextInput
            label="Phone number"
            placeholder="Phone number"
            value={form.phone}
            error={errors.phone}
            onChange={(e) => onChange("phone", e.currentTarget.value)}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            value={form.email}
            error={errors.email}
            onChange={(e) => onChange("email", e.currentTarget.value)}
          />
        </Group>

        <Group justify="space-between" mt={rem(8)}>
          <Button variant="subtle" color="dark" onClick={onBack}>
            Back
          </Button>
          <Button
            onClick={onSubmit}
            style={{ background: PALETTE.ink, color: PALETTE.cream }}
          >
            Create my card
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}

/* ------------------------------------------------------------------ */
/* Stage 3 — finished membership card                                  */
/* ------------------------------------------------------------------ */

function MembershipCard({
  customer,
  stampsEarned,
}: {
  customer: CustomerDetails;
  stampsEarned: number;
}) {
  return (
    <Stack
      align="center"
      gap={rem(20)}
      style={{ animation: "fadeUp 0.5s ease both" }}
    >
      <Stack align="center" gap={2}>
        <Text
          tt="uppercase"
          fw={600}
          size="xs"
          style={{ letterSpacing: rem(3), color: PALETTE.brassDark }}
        >
          Card issued
        </Text>
        <Title order={2} ta="center" style={{ fontSize: rem(26) }}>
          You're in, {firstName(customer.name)}.
        </Title>
      </Stack>

      <Paper
        radius="lg"
        p={rem(24)}
        style={{
          width: "100%",
          minHeight: "300px",
          background: `linear-gradient(135deg, ${PALETTE.ink} 0%, #2C3E2E 100%)`,
          color: PALETTE.cream,
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(30,43,34,0.28)",
        }}
      >
        <Box
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />
        <Stack gap={rem(18)} style={{ position: "relative" }}>
          <Group justify="space-between" align="flex-start">
            <Stack gap={0}>
              <Text
                tt="uppercase"
                size="xs"
                style={{ letterSpacing: rem(2), color: PALETTE.brass }}
              >
                Member
              </Text>
              <Text fw={700} size="lg">
                {customer.name}
              </Text>
            </Stack>
            <Text
              fw={700}
              style={{
                fontFamily: "'Courier New', monospace",
                color: PALETTE.brass,
                fontSize: rem(13),
              }}
            >
              #{memberNumber(customer.email)}
            </Text>
          </Group>

          <Group gap={8} wrap="wrap">
            {Array.from({ length: TOTAL_STAMPS + 1 }).map((_, i) => {
              const isReward = i === TOTAL_STAMPS;
              const isFilled = i < stampsEarned;
              return (
                <Box
                  key={i}
                  style={{
                    width: rem(60),
                    height: rem(60),
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1.5px ${isReward ? "dashed" : "solid"} ${
                      isFilled ? PALETTE.brass : "rgba(251,248,241,0.3)"
                    }`,
                    background: isFilled
                      ? "rgba(201,162,39,0.25)"
                      : "transparent",
                    fontSize: rem(11),
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {isFilled ? (isReward ? "★" : i + 1) : ""}
                </Box>
              );
            })}
          </Group>

          <Text size="xs" style={{ color: "rgba(251,248,241,0.7)" }}>
            {stampsEarned} of {TOTAL_STAMPS} stamps · free order unlocked
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
}

/* ------------------------------------------------------------------ */
/* helpers                                                              */
/* ------------------------------------------------------------------ */

function firstName(fullName: string) {
  return fullName.trim().split(" ")[0] || fullName;
}

function memberNumber(email: string) {
  let hash = 0;
  for (let i = 0; i < email.length; i++) {
    hash = (hash * 31 + email.charCodeAt(i)) % 100000;
  }
  return String(hash).padStart(5, "0");
}

function ordinalSuffix(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
