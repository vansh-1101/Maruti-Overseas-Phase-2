import { useState, useMemo } from 'react';
import { Search, ArrowRight, MapPin, Sparkles, BookOpen, GraduationCap, Globe } from 'lucide-react';
import { trialCourses, foreignCourses } from '@/data';

/* ─── Category tab config ─────────────────────────────────────────── */
const TABS = [
  { id: 'all',       label: 'All Courses',   icon: BookOpen },
  { id: 'Exam Prep', label: 'Exam Prep',     icon: GraduationCap },
  { id: 'Language Learning', label: 'Languages', icon: Sparkles },
  { id: 'Skill Development', label: 'Skills', icon: Globe },
  { id: 'foreign',   label: 'Abroad',        icon: MapPin },
];

/* ─── Gradient palette per category ──────────────────────────────── */
const CATEGORY_COLORS: Record<string, { from: string; to: string; badge: string }> = {
  'Exam Prep':        { from: '#1e3a5f', to: '#2d6a9f', badge: '#2d6a9f' },
  'Language Learning':{ from: '#14532d', to: '#16a34a', badge: '#15803d' },
  'Skill Development':{ from: '#4c1d95', to: '#7c3aed', badge: '#7c3aed' },
  'Business':         { from: '#7c2d12', to: '#ea580c', badge: '#ea580c' },
  'Technology':       { from: '#0f172a', to: '#334155', badge: '#475569' },
  'Engineering':      { from: '#1e3a5f', to: '#0369a1', badge: '#0369a1' },
  'Healthcare':       { from: '#064e3b', to: '#059669', badge: '#059669' },
};

const getColors = (category: string) =>
  CATEGORY_COLORS[category] ?? { from: '#1e3a5f', to: '#2563eb', badge: '#2563eb' };

type AnyCoure = typeof trialCourses[0] | typeof foreignCourses[0];

/* ─── Single Course Card ──────────────────────────────────────────── */
const CourseCard = ({ course }: { course: AnyCoure }) => {
  const { from, to, badge } = getColors(course.category);
  const [imgError, setImgError] = useState(false);

  return (
    <article className="courses-card">
      {/* Thumbnail */}
      <div className="courses-card__thumb" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
        {!imgError ? (
          <img
            src={course.image}
            alt={course.name}
            className="courses-card__img"
            loading="lazy"
            decoding="async"
            width={600}
            height={338}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="courses-card__fallback">
            <span>{course.name.slice(0, 2).toUpperCase()}</span>
          </div>
        )}
        {/* Category badge */}
        <span className="courses-card__badge" style={{ background: badge }}>
          {course.category}
        </span>
      </div>

      {/* Body */}
      <div className="courses-card__body">
        <h3 className="courses-card__title">{course.name}</h3>
        {course.fullName && (
          <p className="courses-card__subtitle">{course.fullName}</p>
        )}
        <p className="courses-card__desc">{course.description}</p>

        {/* Countries */}
        {course.countries && course.countries.length > 0 && (
          <div className="courses-card__countries">
            <MapPin size={11} />
            {course.countries.slice(0, 3).join(' · ')}
            {course.countries.length > 3 && ` +${course.countries.length - 3}`}
          </div>
        )}

        {/* CTA */}
        <a
          href="https://online.marutioverseas.in/register"
          target="_blank"
          rel="noopener noreferrer"
          className="courses-card__cta"
        >
          Enquire Now <ArrowRight size={14} />
        </a>
      </div>
    </article>
  );
};

/* ─── Page ────────────────────────────────────────────────────────── */
const CoursesPage = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const allCourses: AnyCoure[] = useMemo(
    () => [...trialCourses, ...foreignCourses],
    []
  );

  const filtered = useMemo(() => {
    let list = allCourses;

    if (activeTab === 'foreign') {
      list = foreignCourses as AnyCoure[];
    } else if (activeTab !== 'all') {
      list = allCourses.filter(c => c.category === activeTab);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          (c.fullName ?? '').toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [allCourses, activeTab, search]);

  return (
    <>
      {/* ── Inline styles ── */}
      <style>{`
        /* ── Page shell ── */
        .courses-page {
          min-height: 100vh;
          background: #f4f6fb;
          font-family: 'Inter', 'Poppins', sans-serif;
        }

        /* ── Hero ── */
        .courses-hero {
          position: relative;
          width: 100%;
          min-height: 340px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0f2342 0%, #1a3e6e 50%, #0f5f8a 100%);
        }
        .courses-hero__bg {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: radial-gradient(circle at 25% 50%, #60a5fa 0%, transparent 50%),
                            radial-gradient(circle at 75% 20%, #a78bfa 0%, transparent 40%),
                            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .courses-hero__wrap {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 24px 48px;
          width: 100%;
        }
        .courses-hero__pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #93c5fd;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .courses-hero__h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .courses-hero__h1 span {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .courses-hero__sub {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: rgba(255,255,255,0.72);
          max-width: 550px;
          margin: 0;
          line-height: 1.6;
        }
        .courses-hero__stats {
          display: flex;
          gap: 32px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .courses-hero__stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .courses-hero__stat-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: #fff;
        }
        .courses-hero__stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.55);
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ── Sticky toolbar ── */
        .courses-toolbar {
          position: sticky;
          top: 68px;
          z-index: 40;
          background: #fff;
          border-bottom: 1px solid #e5e9f0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
        }
        .courses-toolbar__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }
        /* Search row */
        .courses-toolbar__search-row {
          padding: 14px 0 0;
        }
        .courses-search {
          position: relative;
          max-width: 480px;
        }
        .courses-search__icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
        }
        .courses-search input {
          width: 100%;
          padding: 11px 16px 11px 42px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 0.9rem;
          color: #1e293b;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #f8fafc;
        }
        .courses-search input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
          background: #fff;
        }

        /* Tabs row */
        .courses-tabs {
          display: flex;
          gap: 4px;
          padding: 10px 0 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .courses-tabs::-webkit-scrollbar { display: none; }
        .courses-tab {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 10px 10px 0 0;
          font-size: 0.82rem;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          border: none;
          background: transparent;
          white-space: nowrap;
          transition: color 0.18s, background 0.18s;
          position: relative;
        }
        .courses-tab:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          width: 80%;
          height: 2px;
          border-radius: 2px 2px 0 0;
          background: transparent;
          transition: background 0.18s;
        }
        .courses-tab:hover { color: #1e293b; background: #f1f5f9; }
        .courses-tab.active {
          color: #2563eb;
          background: #eff6ff;
        }
        .courses-tab.active:after { background: #2563eb; }

        /* ── Grid section ── */
        .courses-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 36px 24px 64px;
        }
        .courses-section__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 12px;
        }
        .courses-section__title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
        }
        .courses-section__count {
          font-size: 0.82rem;
          color: #64748b;
          background: #fff;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1.5px solid #e2e8f0;
          font-weight: 600;
        }
        .courses-section__count span {
          color: #2563eb;
        }

        /* Grid */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* ── Card ── */
        .courses-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e8edf5;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
        }
        .courses-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
        }

        /* Thumb */
        .courses-card__thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .courses-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .courses-card:hover .courses-card__img {
          transform: scale(1.05);
        }
        .courses-card__fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .courses-card__fallback span {
          font-size: 2.5rem;
          font-weight: 900;
          color: rgba(255,255,255,0.4);
        }
        .courses-card__badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }

        /* Body */
        .courses-card__body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .courses-card__title {
          font-size: 0.97rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
          margin: 0;
        }
        .courses-card__subtitle {
          font-size: 0.75rem;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }
        .courses-card__desc {
          font-size: 0.76rem;
          color: #64748b;
          line-height: 1.55;
          margin: 4px 0 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .courses-card__countries {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 500;
          margin-top: auto;
          padding-top: 6px;
          border-top: 1px solid #f1f5f9;
        }
        .courses-card__cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 12px;
          padding: 9px 0;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          letter-spacing: 0.02em;
        }
        .courses-card__cta:hover {
          background: #2563eb;
          color: #fff;
          box-shadow: 0 4px 16px rgba(37,99,235,0.3);
        }

        /* ── Empty state ── */
        .courses-empty {
          text-align: center;
          padding: 80px 24px;
          background: #fff;
          border-radius: 20px;
          border: 1.5px dashed #e2e8f0;
        }
        .courses-empty__icon {
          width: 72px;
          height: 72px;
          background: #f1f5f9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #94a3b8;
        }
        .courses-empty h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 8px;
        }
        .courses-empty p {
          color: #64748b;
          font-size: 0.9rem;
          margin: 0 auto 20px;
          max-width: 360px;
        }
        .courses-empty__btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 24px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s;
        }
        .courses-empty__btn:hover { background: #1d4ed8; }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .courses-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 780px) {
          .courses-hero__wrap { padding: 90px 16px 40px; }
          .courses-hero__stats { gap: 20px; }
          .courses-toolbar__inner { padding: 0 16px; }
          .courses-search { max-width: 100%; }
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .courses-section { padding: 24px 16px 48px; }
          .courses-card__body { padding: 12px; }
          .courses-card__title { font-size: 0.88rem; }
          .courses-card__desc { display: none; }
        }
        @media (max-width: 420px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .courses-tab { font-size: 0.75rem; padding: 7px 12px; }
        }
      `}</style>

      <div className="courses-page">
        {/* ── Hero ── */}
        <section className="courses-hero">
          <div className="courses-hero__bg" />
          <div className="courses-hero__wrap">
            <p className="courses-hero__pill">
              <Sparkles size={12} /> Maruti Overseas · Course Finder
            </p>
            <h1 className="courses-hero__h1">
              Explore Our <span>Expert-Led</span><br />Courses & Programs
            </h1>
            <p className="courses-hero__sub">
              From IELTS, PTE and GMAT to French, German and global degree programs —
              everything you need to study abroad.
            </p>
            <div className="courses-hero__stats">
              <div className="courses-hero__stat">
                <span className="courses-hero__stat-num">{trialCourses.length + foreignCourses.length}+</span>
                <span className="courses-hero__stat-label">Courses</span>
              </div>
              <div className="courses-hero__stat">
                <span className="courses-hero__stat-num">10+</span>
                <span className="courses-hero__stat-label">Destinations</span>
              </div>
              <div className="courses-hero__stat">
                <span className="courses-hero__stat-num">15k+</span>
                <span className="courses-hero__stat-label">Students Placed</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sticky Toolbar ── */}
        <div className="courses-toolbar">
          <div className="courses-toolbar__inner">
            <div className="courses-toolbar__search-row">
              <div className="courses-search">
                <Search size={16} className="courses-search__icon" />
                <input
                  type="text"
                  placeholder="Search courses, exams, languages…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search courses"
                />
              </div>
            </div>
            <div className="courses-tabs" role="tablist">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`courses-tab${activeTab === tab.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={13} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Course Grid ── */}
        <section className="courses-section">
          <div className="courses-section__header">
            <h2 className="courses-section__title">
              {TABS.find(t => t.id === activeTab)?.label ?? 'All Courses'}
            </h2>
            <span className="courses-section__count">
              <span>{filtered.length}</span> {filtered.length === 1 ? 'course' : 'courses'} found
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="courses-grid">
              {filtered.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="courses-empty">
              <div className="courses-empty__icon">
                <Search size={28} />
              </div>
              <h3>No courses found</h3>
              <p>Try adjusting your search or switching to a different category tab.</p>
              <button
                className="courses-empty__btn"
                onClick={() => { setSearch(''); setActiveTab('all'); }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default CoursesPage;
