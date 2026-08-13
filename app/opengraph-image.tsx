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
          backgroundColor: "#f6f6f3",
          borderTop: "10px solid #1e3fbb",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontSize: 30, color: "#17171c", fontWeight: 700 }}>afolabi</div>
          <div style={{ fontSize: 30, color: "#1e3fbb", fontWeight: 700 }}>.</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, color: "#1e3fbb", letterSpacing: 4, marginBottom: 20 }}>
            SMART CONTRACT ENGINEER
          </div>
          <div
            style={{
              fontSize: 68,
              color: "#17171c",
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 940,
            }}
          >
            I build on-chain protocols and test them like an attacker.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, fontSize: 24, color: "#55555f" }}>
          <span>Solidity</span>
          <span style={{ color: "#c8c8d0" }}>/</span>
          <span>Cairo</span>
          <span style={{ color: "#c8c8d0" }}>/</span>
          <span>Foundry</span>
          <span style={{ color: "#c8c8d0" }}>/</span>
          <span>110 PRs merged into other teams&apos; repos</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
