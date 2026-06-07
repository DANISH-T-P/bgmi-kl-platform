import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = "BGMI-KL — Kerala's BGMI Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #090909 0%, #151515 50%, #090909 100%)",
          color: "#E9E5DC",
          padding: 80,
        }}
      >
        <div
          style={{
            width: 80,
            height: 6,
            background: "#8EBF3D",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#E9E5DC",
          }}
        >
          BGMI-KL
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 24,
            color: "#8EBF3D",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 32,
            color: "#8D8D8D",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Kerala&apos;s Ultimate BGMI Community
        </div>
      </div>
    ),
    { ...size },
  );
}
