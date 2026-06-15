import { ImageResponse } from "next/og";

export const alt = "Afolabi Ayomide Emmanuel, Smart Contract Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08080a",
          backgroundImage:
            "radial-gradient(circle at 25% 15%, rgba(124,92,255,0.35), transparent 45%)",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 30, color: "#ededf0", fontWeight: 700 }}>afolabi</div>
          <div style={{ fontSize: 30, color: "#7c5cff", fontWeight: 700 }}>.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, color: "#7c5cff", letterSpacing: 4, marginBottom: 20 }}>
            SMART CONTRACT ENGINEER
          </div>
          <div
            style={{
              fontSize: 76,
              color: "#ededf0",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            I build secure on-chain systems people can trust.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#9a9aa6" }}>
          <span>Solidity</span>
          <span style={{ color: "#3a3a42" }}>/</span>
          <span>Cairo</span>
          <span style={{ color: "#3a3a42" }}>/</span>
          <span>Foundry</span>
          <span style={{ color: "#3a3a42" }}>/</span>
          <span>EVM and Starknet</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
