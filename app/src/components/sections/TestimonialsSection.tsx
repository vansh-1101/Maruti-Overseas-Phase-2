import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEWS_URL = 'https://share.google/jCA2DgQYt7JIf9Oui';

const reviews = [
  {
    name: 'Nikita Patel',
    initials: 'NP',
    color: 'from-blue-500 to-blue-700',
    time: '2 months ago',
    text: 'I secured my Australia Visa in just 14 days with proper guidance of Mr. Chirag Soni. Thank you Maruti Overseas for making my dream come true!',
  },
  {
    name: 'Mehul Patel',
    initials: 'MP',
    color: 'from-green-500 to-green-700',
    time: '3 months ago',
    text: 'I got my Australia Visa with my family due to proper guidance and documentation by Maruti Overseas. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    color: 'from-purple-500 to-purple-700',
    time: '1 month ago',
    text: 'The team made my UK study visa process incredibly smooth. From university selection to visa filing, everything was handled professionally.',
  },
  {
    name: 'Rahul Desai',
    initials: 'RD',
    color: 'from-orange-500 to-orange-600',
    time: '4 months ago',
    text: 'Thanks to Maruti Overseas, I got into my dream university in Canada. SOP guidance was invaluable. Completely stress-free process!',
  },
  {
    name: 'Karan Shah',
    initials: 'KS',
    color: 'from-red-500 to-red-700',
    time: '2 months ago',
    text: 'The US visa process seemed daunting, but Maruti Overseas made it simple. Mock interview sessions helped a lot. First attempt success!',
  },
  {
    name: 'Anjali Patel',
    initials: 'AP',
    color: 'from-teal-500 to-teal-700',
    time: '5 months ago',
    text: 'Excellent service! Always available to answer queries. My New Zealand student visa was approved within 3 weeks. Thank you Maruti Overseas!',
  },
];

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <a
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-[300px] flex-shrink-0"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
        {review.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <GoogleG />
          <span className="text-xs text-gray-500">{review.time}</span>
        </div>
      </div>
    </div>
    <div className="flex gap-0.5 mb-2">
      {[1,2,3,4,5].map(i => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
    <p className="text-gray-700 text-sm leading-relaxed">"{review.text}"</p>
  </a>
);

const TestimonialsSection = () => {
  const row2 = [...reviews.slice(3), ...reviews.slice(0, 3)];

  return (
    <>
      <style>{`
        @keyframes marqueeL {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* section is naturally 100% width — overflow:hidden clips the scrolling tracks cleanly */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">

        {/* Constrained header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-3">
                What Our Students Say
              </h2>
              <p className="text-gray-600 text-lg">
                Real reviews from real students — verified by Google.
              </p>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3 transition-colors self-start md:self-auto shadow-sm"
            >
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-2xl font-bold text-gray-900">5.0</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <GoogleG />
                  <span className="font-semibold text-gray-800 text-sm">Google Reviews</span>
                </div>
                <span className="flex items-center gap-1 text-primary-600 text-xs font-medium">
                  <ExternalLink className="w-3 h-3" />
                  View all reviews
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Row 1 — scrolls left. No overflow:hidden here; parent section handles clip. */}
        <div className="mb-4">
          <div
            className="flex gap-4 py-1"
            style={{ animation: 'marqueeL 20s linear infinite', width: 'max-content' }}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <ReviewCard key={`r1-${i}`} review={r} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div>
          <div
            className="flex gap-4 py-1"
            style={{ animation: 'marqueeR 20s linear infinite', width: 'max-content' }}
          >
            {[...row2, ...row2].map((r, i) => (
              <ReviewCard key={`r2-${i}`} review={r} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg"
          >
            <ExternalLink className="w-4 h-4" />
            Read All Google Reviews
          </a>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
