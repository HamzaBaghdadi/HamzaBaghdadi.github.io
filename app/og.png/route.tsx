import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { experience, profile } from "@/content/profile";

export const dynamic = "force-static";

/** Open Graph image, rendered once at build time to /og.png. */
export async function GET() {
  const photo = await readFile(join(process.cwd(), "content/og-photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          background: "#08090a",
          color: "#f4f5f6",
          padding: "0 96px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by ImageResponse, not the browser */}
        <img src={photoSrc} width={300} height={300} alt="" style={{ borderRadius: 150, border: "4px solid #1f2023" }} />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#9599a1", marginTop: 16 }}>
            {`${profile.role} at ${experience[0].company}`}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#ff5a72", marginTop: 40 }}>
            TypeScript · React · Next.js · Angular
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
