import { useState } from 'react';
import { HelpCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';

const IELTSPredictorPage = () => {
    const [listening, setListening] = useState('');
    const [reading, setReading] = useState('');
    const [writing, setWriting] = useState('');
    const [speaking, setSpeaking] = useState('');

    const calculateBand = (score: string): number => {
        const num = parseFloat(score);
        if (isNaN(num) || num < 0 || num > 9) return 0;
        return Math.round(num * 2) / 2; // Round to nearest 0.5
    };

    const listeningBand = calculateBand(listening);
    const readingBand = calculateBand(reading);
    const writingBand = calculateBand(writing);
    const speakingBand = calculateBand(speaking);

    const overallBand = listening && reading && writing && speaking
        ? Math.round(((listeningBand + readingBand + writingBand + speakingBand) / 4) * 2) / 2
        : 0;

    const getBandLevel = (band: number): string => {
        if (band >= 8.5) return 'Expert User';
        if (band >= 7.5) return 'Very Good User';
        if (band >= 6.5) return 'Competent User';
        if (band >= 5.5) return 'Modest User';
        if (band >= 4.5) return 'Limited User';
        return 'Extremely Limited User';
    };

    const getRecommendations = (band: number): string[] => {
        if (band >= 7.5) {
            return [
                'Excellent score! You meet requirements for most universities',
                'Focus on maintaining consistency across all sections',
                'Consider applying to top-tier universities',
            ];
        } else if (band >= 6.5) {
            return [
                'Good score for most undergraduate programs',
                'Work on weaker sections to improve overall band',
                'Practice academic writing and speaking',
            ];
        } else if (band >= 5.5) {
            return [
                'Meets minimum requirements for some universities',
                'Significant improvement needed for competitive programs',
                'Focus on vocabulary and grammar fundamentals',
                'Consider taking IELTS preparation course',
            ];
        } else {
            return [
                'Below minimum requirements for most universities',
                'Intensive preparation recommended',
                'Work with a tutor or join coaching classes',
                'Build strong foundation in all four skills',
            ];
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/tools/calculator-bg.png"
                        alt="IELTS Predictor"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>
                <div className="relative h-full flex flex-col justify-center">
                    <div className="container-custom">
                        <div className="max-w-3xl">
                            <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-6">
                                <HelpCircle className="w-8 h-8 text-primary-600" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                IELTS Score Predictor
                            </h1>
                            <p className="text-xl text-white/90">
                                Estimate your IELTS band score based on your practice test performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Predictor */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Input */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Practice Scores</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Listening (0-9)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.5"
                                            min="0"
                                            max="9"
                                            value={listening}
                                            onChange={(e) => setListening(e.target.value)}
                                            placeholder="e.g., 7.5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                                        />
                                        {listening && (
                                            <p className="mt-2 text-sm text-gray-600">
                                                Band: <span className="font-semibold">{listeningBand}</span>
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Reading (0-9)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.5"
                                            min="0"
                                            max="9"
                                            value={reading}
                                            onChange={(e) => setReading(e.target.value)}
                                            placeholder="e.g., 8.0"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                                        />
                                        {reading && (
                                            <p className="mt-2 text-sm text-gray-600">
                                                Band: <span className="font-semibold">{readingBand}</span>
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Writing (0-9)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.5"
                                            min="0"
                                            max="9"
                                            value={writing}
                                            onChange={(e) => setWriting(e.target.value)}
                                            placeholder="e.g., 6.5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                                        />
                                        {writing && (
                                            <p className="mt-2 text-sm text-gray-600">
                                                Band: <span className="font-semibold">{writingBand}</span>
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Speaking (0-9)
                                        </label>
                                        <input
                                            type="number"
                                            step="0.5"
                                            min="0"
                                            max="9"
                                            value={speaking}
                                            onChange={(e) => setSpeaking(e.target.value)}
                                            placeholder="e.g., 7.0"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                                        />
                                        {speaking && (
                                            <p className="mt-2 text-sm text-gray-600">
                                                Band: <span className="font-semibold">{speakingBand}</span>
                                            </p>
                                        )}
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <p className="text-sm text-blue-800">
                                            <strong>Tip:</strong> Enter your scores from practice tests or mock exams. Scores are rounded to nearest 0.5 band.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white">
                                    <h2 className="text-2xl font-bold mb-6">Predicted Overall Band</h2>

                                    <div className="text-center py-8">
                                        <div className={`text-7xl font-bold mb-4 ${overallBand ? '' : 'opacity-50'}`}>
                                            {overallBand || '0.0'}
                                        </div>
                                        {overallBand > 0 && (
                                            <div className="text-xl opacity-90">
                                                {getBandLevel(overallBand)}
                                            </div>
                                        )}
                                    </div>

                                    {overallBand > 0 && (
                                        <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="opacity-90">Listening</span>
                                                <span className="text-2xl font-bold">{listeningBand}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="opacity-90">Reading</span>
                                                <span className="text-2xl font-bold">{readingBand}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="opacity-90">Writing</span>
                                                <span className="text-2xl font-bold">{writingBand}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="opacity-90">Speaking</span>
                                                <span className="text-2xl font-bold">{speakingBand}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {overallBand > 0 && (
                                    <>
                                        <div className="bg-white rounded-2xl shadow-lg p-6">
                                            <div className="flex items-center gap-2 mb-4">
                                                <TrendingUp className="w-5 h-5 text-primary-600" />
                                                <h3 className="font-bold text-gray-900">Recommendations</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {getRecommendations(overallBand).map((rec, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="text-primary-600 mt-1">•</span>
                                                        <span>{rec}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-white rounded-2xl shadow-lg p-6">
                                            <h3 className="font-bold text-gray-900 mb-3">University Requirements</h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                    <span className="text-gray-600">Top Universities</span>
                                                    <span className="font-semibold">7.0 - 7.5+</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-gray-100">
                                                    <span className="text-gray-600">Good Universities</span>
                                                    <span className="font-semibold">6.5 - 7.0</span>
                                                </div>
                                                <div className="flex justify-between py-2">
                                                    <span className="text-gray-600">Minimum Entry</span>
                                                    <span className="font-semibold">6.0 - 6.5</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <Button
                                    className="w-full"
                                    size="lg"
                                    onClick={() => window.open(generateWhatsAppLink('919824372321', 'Hi, I want to book IELTS preparation course and improve my score.'), '_blank')}
                                >
                                    Book IELTS Preparation Course
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IELTSPredictorPage;
