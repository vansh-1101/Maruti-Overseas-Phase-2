import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Globe, CheckCircle } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-xl mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-7 h-7 text-primary-600" />,
      value: 22,
      suffix: '+',
      label: 'Years of Experience',
      delay: 0,
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-primary-600" />,
      value: 98,
      suffix: '%',
      label: 'Visa Success Rate',
      delay: 100,
    },
    {
      icon: <Globe className="w-7 h-7 text-primary-600" />,
      value: 15,
      suffix: '+',
      label: 'Countries',
      delay: 200,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
