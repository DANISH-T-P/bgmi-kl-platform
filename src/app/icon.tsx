import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090909",
          color: "#8EBF3D",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        KL
      </div>
    ),
    { ...size },
  );
}
