import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

export interface VideoReel {
  id: number;
  src: string;
  title: string;
  tag: string;
}

export const reels: VideoReel[] = [
  { id: 1, src: '/videos/reel1.mp4', title: 'Student Success Story', tag: 'Visa Approved 🎉' },
  { id: 2, src: '/videos/reel2.mp4', title: 'Germany Student Visa', tag: 'Expert Counseling' },
  { id: 3, src: '/videos/reel3.mp4', title: 'UK Student Visa', tag: 'Life Abroad' },
];

export const VideoModal = ({ reel, onClose }: { reel: VideoReel; onClose: () => void }) => {
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

export const ReelCard = ({ reel, onPlay }: { reel: VideoReel & { uid: string }; onPlay: (r: VideoReel) => void }) => {
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
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
      }} />
      {!hovered && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(37,99,235,0.25) 0%, transparent 60%)',
        }} />
      )}
      <div style={{ position: 'absolute', top: 12, left: 12 }}>
        <span style={{
          padding: '4px 10px', borderRadius: '999px',
          background: 'rgba(37,99,235,0.9)', backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: '11px', fontWeight: 700,
        }}>{reel.tag}</span>
      </div>
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
      <div style={{ position: 'absolute', bottom: 14, left: 14, right: 14 }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', lineHeight: 1.35 }}>{reel.title}</p>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '11px', marginTop: 3 }}>Maruti Overseas</p>
      </div>
    </div>
  );
};

export const InfiniteScrollColumn = ({ items, onPlay, speed = 40 }: {
  items: (VideoReel & { uid: string })[];
  onPlay: (r: VideoReel) => void;
  speed?: number;
}) => {
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
      {activeReel && <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </>
  );
};
