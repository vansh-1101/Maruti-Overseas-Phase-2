import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

/* ─── Types ─── */
export interface VideoReel {
  id: number;
  youtubeId: string;
  title: string;
  tag: string;
  /** Fallback gradient shown instantly while thumbnail loads (or if video is private) */
  gradient: string;
  /** Emoji shown on the gradient card */
  emoji: string;
}

/* ─── Data ─── */
export const reels: VideoReel[] = [
  {
    id: 1, youtubeId: '-epQAop67X4',
    title: 'Student Success Story', tag: 'Visa Approved 🎉',
    gradient: 'linear-gradient(160deg, #1e3a8a 0%, #2563eb 50%, #0ea5e9 100%)',
    emoji: '🎉',
  },
  {
    id: 2, youtubeId: 'qPDzO85BibY',
    title: 'Germany Student Visa', tag: 'Expert Counseling',
    gradient: 'linear-gradient(160deg, #064e3b 0%, #059669 50%, #34d399 100%)',
    emoji: '🎓',
  },
  {
    id: 3, youtubeId: 'ivg7RQaw9rY',
    title: 'UK Student Visa', tag: 'Life Abroad',
    gradient: 'linear-gradient(160deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)',
    emoji: '✈️',
  },
];

/*
 * maxresdefault = 1280×720 HD — best quality thumbnail YouTube provides.
 * hqdefault = 480×360 — reliable fallback if maxres doesn't exist.
 * Both work for public & unlisted videos.
 */
const ytThumbHD  = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
const ytThumbFB  = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytThumb    = ytThumbHD; // alias used by modal
const ytEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

/* ─── Video Modal ─── */
export const VideoModal = ({ reel, onClose }: { reel: VideoReel; onClose: () => void }) => {
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%', maxWidth: '360px',
          margin: '0 16px',
          aspectRatio: '9/16',
          borderRadius: '22px',
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
          background: '#000',
        }}
      >
        {/* Thumbnail shown instantly while iframe loads */}
        {!iframeReady && (
          <img
            src={ytThumb(reel.youtubeId)}
            alt={reel.title}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%',
            }}
          />
        )}

        <iframe
          src={ytEmbed(reel.youtubeId)}
          title={reel.title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          onLoad={() => setIframeReady(true)}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            border: 'none',
            opacity: iframeReady ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 10,
            width: 40, height: 40, borderRadius: '50%', border: 'none',
            cursor: 'pointer', background: 'rgba(0,0,0,0.6)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

/* ─── Reel Card ─── */
export const ReelCard = ({
  reel, onPlay,
}: {
  reel: VideoReel & { uid: string };
  onPlay: (r: VideoReel) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <div
      onClick={() => onPlay(reel)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        aspectRatio: '9/16',
        cursor: 'pointer',
        flexShrink: 0,
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        boxShadow: hovered
          ? '0 24px 60px rgba(37,99,235,0.35)'
          : '0 8px 28px rgba(0,0,0,0.4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        /* Gradient shown INSTANTLY — no blank card ever */
        background: reel.gradient,
      }}
    >
      {/* Emoji decoration on gradient background */}
      {!thumbLoaded && !thumbFailed && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <span style={{ fontSize: 64, opacity: 0.25 }}>{reel.emoji}</span>
        </div>
      )}

      {/* Hidden img — loads thumbnail in background, fades in when ready */}
      {!thumbFailed && (
        <img
          src={ytThumb(reel.youtubeId)}
          alt=""
          aria-hidden="true"
          onLoad={() => setThumbLoaded(true)}
          onError={(e) => {
            const img = e.currentTarget;
            // If maxresdefault failed, try hqdefault once before giving up
            if (img.src !== ytThumbFB(reel.youtubeId)) {
              img.src = ytThumbFB(reel.youtubeId);
            } else {
              setThumbFailed(true);
            }
          }}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            opacity: thumbLoaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
      )}
      {/* Gradient overlay — always visible */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.05) 100%)',
      }} />

      {/* Blue tint on idle */}
      {!hovered && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.22) 0%, transparent 60%)',
        }} />
      )}

      {/* Tag */}
      <div style={{ position: 'absolute', top: 12, left: 12 }}>
        <span style={{
          padding: '4px 10px', borderRadius: '999px',
          background: 'rgba(37,99,235,0.92)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: '11px', fontWeight: 700,
        }}>{reel.tag}</span>
      </div>

      {/* YT badge */}
      <div style={{
        position: 'absolute', top: 12, right: 12,
        background: 'rgba(0,0,0,0.6)', borderRadius: '6px',
        padding: '3px 7px', display: 'flex', alignItems: 'center',
      }}>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M15.67 1.72A2 2 0 0 0 14.26.3C13.01 0 8 0 8 0S2.99 0 1.74.3A2 2 0 0 0 .33 1.72C0 2.98 0 5.5 0 5.5s0 2.52.33 3.78A2 2 0 0 0 1.74 10.7C2.99 11 8 11 8 11s5.01 0 6.26-.3a2 2 0 0 0 1.41-1.42C16 8.02 16 5.5 16 5.5s0-2.52-.33-3.78z" fill="#FF0000"/>
          <path d="M6.4 7.86V3.14l4.27 2.36-4.27 2.36z" fill="#FFFFFF"/>
        </svg>
      </div>

      {/* Play button */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%, -50%) scale(${hovered ? 1.12 : 1})`,
        transition: 'transform 0.25s ease',
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: hovered ? '#fff' : 'rgba(255,255,255,0.9)',
          boxShadow: hovered
            ? '0 0 0 10px rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.4)'
            : '0 4px 16px rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.25s ease',
        }}>
          <Play size={20} style={{ color: '#1d4ed8', fill: '#1d4ed8', marginLeft: 3 }} />
        </div>
      </div>

      {/* Label */}
      <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', lineHeight: 1.35 }}>
          {reel.title}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', marginTop: 3 }}>
          Maruti Overseas
        </p>
      </div>
    </div>
  );
};

/* ─── Infinite Scroll Column ─── */
export const InfiniteScrollColumn = ({
  items, onPlay, speed = 40,
}: {
  items: (VideoReel & { uid: string })[];
  onPlay: (r: VideoReel) => void;
  speed?: number;
}) => {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', height: '100%', width: '100%' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', gap: '14px',
        animation: `scrollUp ${speed}s linear infinite`,
        willChange: 'transform',
      }}>
        {doubled.map((reel, i) => (
          <ReelCard key={`${reel.uid}-${i}`} reel={reel} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main export ─── */
export const ScrollingVideoReels = () => {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);
  const col1 = reels.map(r => ({ ...r, uid: `c1-${r.id}` }));

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .vrs-right-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          display: flex;
          justify-content: flex-end;
          padding: 0;
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        @media (max-width: 1024px) {
          .vrs-right-container {
            position: relative;
            height: 500px;
            justify-content: center;
          }
        }
        .vrs-col {
          flex: 0 0 400px;
          max-width: 100%;
        }
      `}</style>

      <div className="vrs-right-container w-full h-full">
        <div className="vrs-col">
          <InfiniteScrollColumn items={col1} onPlay={setActiveReel} speed={25} />
        </div>
      </div>

      {activeReel && (
        <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />
      )}
    </>
  );
};
