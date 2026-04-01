import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, X, Volume2, VolumeX, ArrowRight } from 'lucide-react';

interface VideoReel {
  id: number;
  src: string;
  title: string;
  tag: string;
}

const reels: VideoReel[] = [
  { id: 1, src: '/videos/reel1.mp4', title: 'Student Success Story', tag: 'Visa Approved 🎉' },
  { id: 2, src: '/videos/reel2.mp4', title: 'Germany Student Visa', tag: 'Expert Counseling' },
  { id: 3, src: '/videos/reel3.mp4', title: 'UK Student Visa', tag: 'Life Abroad' },
];

/* ─── Video Modal ─── */
const VideoModal = ({ reel, onClose }: { reel: VideoReel; onClose: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: '360px', margin: '0 16px', aspectRatio: '9/16' }}
      >
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay playsInline loop muted={muted}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '22px' }}
        />
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '22px', pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 40%)',
        }} />
        <div style={{ position: 'absolute', bottom: 20, left: 20, right: 56 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '999px',
            background: 'rgba(37,99,235,0.85)', color: '#fff', fontSize: '12px',
            fontWeight: 700, marginBottom: '8px',
          }}>{reel.tag}</span>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: '17px', lineHeight: 1.3 }}>{reel.title}</p>
        </div>
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { icon: <X size={18} />, action: onClose },
            { icon: muted ? <VolumeX size={18} /> : <Volume2 size={18} />, action: () => { if (videoRef.current) { videoRef.current.muted = !muted; setMuted(m => !m); } } },
          ].map((btn, i) => (
            <button
              key={i}
              onClick={btn.action}
              style={{
                width: 40, height: 40, borderRadius: '50%', border: 'none', cursor: 'pointer',
                background: 'rgba(0,0,0,0.55)', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >{btn.icon}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Single Reel Card ─── */
const ReelCard = ({ reel, onPlay }: { reel: VideoReel & { uid: string }; onPlay: (r: VideoReel) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const enter = useCallback(() => {
    setHovered(true);
    videoRef.current?.play().catch(() => {});
  }, []);

  const leave = useCallback(() => {
    setHovered(false);
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  }, []);

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => onPlay(reel)}
      style={{
        position: 'relative',
        borderRadius: '18px',
        overflow: 'hidden',
        aspectRatio: '9/16',
        cursor: 'pointer',
        background: '#0f172a',
        flexShrink: 0,
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        boxShadow: hovered
          ? '0 24px 60px rgba(37,99,235,0.3)'
          : '0 8px 28px rgba(0,0,0,0.35)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <video
        ref={videoRef}
        src={reel.src}
        muted playsInline loop preload="metadata"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          opacity: hovered ? 1 : 0.75, transition: 'opacity 0.3s',
        }}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
      }} />
      {/* Blue tint on idle */}
      {!hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(37,99,235,0.25) 0%, transparent 60%)',
        }} />
      )}
      {/* Tag */}
      <div style={{ position: 'absolute', top: 12, left: 12 }}>
        <span style={{
          padding: '4px 10px', borderRadius: '999px',
          background: 'rgba(37,99,235,0.9)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: '11px', fontWeight: 700,
        }}>{reel.tag}</span>
      </div>
      {/* Play button */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: `translate(-50%, -50%) scale(${hovered ? 1.12 : 1})`,
        transition: 'transform 0.3s ease',
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%',
          background: hovered ? '#fff' : 'rgba(255,255,255,0.88)',
          boxShadow: hovered ? '0 0 0 10px rgba(255,255,255,0.18)' : '0 4px 16px rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
        }}>
          <Play size={20} style={{ color: '#1d4ed8', fill: '#1d4ed8', marginLeft: 3 }} />
        </div>
      </div>
      {/* Bottom label */}
      <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', lineHeight: 1.35 }}>{reel.title}</p>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', marginTop: 3 }}>Maruti Overseas</p>
      </div>
    </div>
  );
};

/* ─── Infinite Scroll Column ─── */
const InfiniteScrollColumn = ({ items, onPlay, speed = 40 }: {
  items: (VideoReel & { uid: string })[];
  onPlay: (r: VideoReel) => void;
  speed?: number;
}) => {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div style={{ overflow: 'hidden', height: '100%', width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          animation: `scrollUp ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((reel, i) => (
          <ReelCard key={`${reel.uid}-${i}`} reel={reel} onPlay={onPlay} />
        ))}
      </div>
    </div>
  );
};

/* ─── Main Section ─── */
const VideoReelsSection = () => {
  const [activeReel, setActiveReel] = useState<VideoReel | null>(null);

  const col1 = reels.map(r => ({ ...r, uid: `c1-${r.id}` }));
  const col2 = [...reels].reverse().map(r => ({ ...r, uid: `c2-${r.id}` }));

  return (
    <>
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .vrs-section {
          display: flex;
          min-height: 100vh;
          overflow: hidden;
          background: linear-gradient(135deg, #0a1628 0%, #0f1e3d 50%, #0a1628 100%);
          position: relative;
        }
        .vrs-left {
          flex: 0 0 52%;
          padding: 80px 48px 80px 7vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .vrs-right {
          flex: 0 0 48%;
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 14px;
          padding: 0;
          /* mask so cards fade at top & bottom */
          mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%);
        }
        .vrs-col {
          flex: 1;
          min-width: 0;
        }
        /* Decorative glow behind left content */
        .vrs-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        @media (max-width: 900px) {
          .vrs-section { flex-direction: column; min-height: auto; }
          .vrs-left { flex: none; padding: 60px 24px; }
          .vrs-right { flex: none; height: 520px; }
        }
        @media (max-width: 600px) {
          .vrs-right { height: 420px; }
          .vrs-left { padding: 48px 20px; }
        }
      `}</style>

      <section className="vrs-section" id="video-reels">
        {/* Decorative blobs */}
        <div className="vrs-glow" style={{
          width: 480, height: 480,
          background: 'rgba(37,99,235,0.12)',
          top: '-80px', left: '-80px',
        }} />
        <div className="vrs-glow" style={{
          width: 320, height: 320,
          background: 'rgba(20,184,166,0.08)',
          bottom: '-60px', left: '30%',
        }} />

        {/* ── LEFT: Content ── */}
        <div className="vrs-left">
          {/* Badge */}
          <div style={{ marginBottom: '20px' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 16px', borderRadius: '999px',
              background: 'rgba(37,99,235,0.14)',
              border: '1px solid rgba(37,99,235,0.35)',
              color: '#93c5fd', fontSize: '12px', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#3b82f6', boxShadow: '0 0 6px #3b82f6',
                animation: 'pulse 2s infinite',
              }} />
              Student Stories
            </span>
          </div>

          {/* Heading */}
          <h2 style={{
            fontSize: 'clamp(34px, 4.5vw, 58px)',
            fontWeight: 800, lineHeight: 1.08,
            color: '#fff', marginBottom: '20px',
            fontFamily: 'var(--font-display)',
          }}>
            Real Journeys.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Real Visa Wins.
            </span>
          </h2>

          {/* Sub-text */}
          <p style={{
            fontSize: '17px', lineHeight: 1.75,
            color: '#94a3b8', maxWidth: '440px', marginBottom: '36px',
          }}>
            Watch quick success stories, counseling moments, and study abroad tips from our
            students now living their dreams overseas.
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '0',
            marginBottom: '40px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
            maxWidth: '420px',
          }}>
            {[
              { num: '5000+', label: 'Students Sent' },
              { num: '15+', label: 'Countries' },
              { num: '98%', label: 'Visa Success' },
            ].map((s, i) => (
              <div key={s.label} style={{
                flex: 1, padding: '20px 16px',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.055)',
                textAlign: 'center',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#3b82f6', fontFamily: 'var(--font-display)' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 26px', borderRadius: '999px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: '#fff', fontWeight: 700, fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              Book Free Counseling <ArrowRight size={16} />
            </Link>
            <Link
              to="/about/testimonials"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 24px', borderRadius: '999px',
                border: '1.5px solid rgba(255,255,255,0.18)',
                color: '#e2e8f0', fontWeight: 600, fontSize: '15px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              View All Stories
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Auto-scrolling Columns ── */}
        <div className="vrs-right">
          <div className="vrs-col">
            <InfiniteScrollColumn items={col1} onPlay={setActiveReel} speed={38} />
          </div>
          <div className="vrs-col" style={{ marginTop: '60px' }}>
            <InfiniteScrollColumn items={col2} onPlay={setActiveReel} speed={50} />
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeReel && <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </>
  );
};

export default VideoReelsSection;
