import { useState } from "react"

// Image with a dark gradient fallback so the layout holds if a photo file is missing.
export default function Photo({ src, alt, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#3d2b24] to-[#121212] ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  )
}
