import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';

const GPAConverterPage = () => {
    const [inputType, setInputType] = useState<'percentage' | 'cgpa'>('percentage');
    const [inputValue, setInputValue] = useState('');
    const [scale, setScale] = useState<'4.0' | '5.0' | '10.0'>('4.0');

    const convertToGPA = (): number => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) return 0;

        if (inputType === 'percentage') {
            // Percentage to GPA conversion
            if (scale === '4.0') {
                if (value >= 90) return 4.0;
                if (value >= 80) return 3.7;
                if (value >= 70) return 3.3;
                if (value >= 60) return 3.0;
                if (value >= 50) return 2.7;
                if (value >= 40) return 2.3;
                return 2.0;
            } else if (scale === '5.0') {
                return (value / 20);
            } else {
                return (value / 10);
            }
        } else {
            // CGPA to GPA conversion
            if (scale === '4.0') {
                return (value / 10) * 4;
            } else if (scale === '5.0') {
                return (value / 10) * 5;
            } else {
                return value;
            }
        }
    };

    const gpa = convertToGPA();

    const getGrade = (gpa: number, scale: string): string => {
        if (scale === '4.0') {
            if (gpa >= 3.7) return 'A';
            if (gpa >= 3.3) return 'A-';
            if (gpa >= 3.0) return 'B+';
            if (gpa >= 2.7) return 'B';
            if (gpa >= 2.3) return 'B-';
            if (gpa >= 2.0) return 'C+';
            return 'C';
        }
        return 'N/A';
    };

    const getEligibility = (gpa: number, scale: string): { tier: string; universities: string; programs: string[]; color: string } => {
        let effectiveGPA = gpa;

        // Normalize to 4.0 scale for comparison
        if (scale === '5.0') {
            effectiveGPA = (gpa / 5) * 4;
        } else if (scale === '10.0') {
            effectiveGPA = (gpa / 10) * 4;
        }

        if (effectiveGPA >= 3.7) {
            return {
                tier: 'Top Tier Universities',
                universities: 'Ivy League, Oxbridge, Top 50 Global Universities',
                programs: [
                    'All undergraduate and graduate programs',
                    'Competitive scholarships available',
                    'Research positions and TA/RA opportunities',
                    'MBA programs at top business schools'
                ],
                color: 'green'
            };
        } else if (effectiveGPA >= 3.3) {
            return {
                tier: 'Excellent Universities',
                universities: 'Top 100 Global Universities, Russell Group, State Flagships',
                programs: [
                    'Most undergraduate and graduate programs',
                    'Merit-based scholarships possible',
                    'STEM programs at reputed universities',
                    'Professional programs (Engineering, Business)'
                ],
                color: 'blue'
            };
        } else if (effectiveGPA >= 3.0) {
            return {
                tier: 'Good Universities',
                universities: 'Top 200 Universities, State Universities, Good Private Colleges',
                programs: [
                    'Undergraduate programs widely available',
                    'Graduate programs with some conditions',
                    'May need strong test scores (GRE/GMAT)',
                    'Foundation/Pathway programs available'
                ],
                color: 'yellow'
            };
        } else if (effectiveGPA >= 2.5) {
            return {
                tier: 'Moderate Universities',
                universities: 'Community Colleges, Regional Universities, Some Private Colleges',
                programs: [
                    'Undergraduate programs available',
                    'Foundation/Pathway programs recommended',
                    'May need to improve test scores',
                    'Consider diploma to degree pathway'
                ],
                color: 'orange'
            };
        } else {
            return {
                tier: 'Foundation Programs',
                universities: 'Community Colleges, Foundation Programs, Pathway Programs',
                programs: [
                    'Foundation/Pre-university programs',
                    'English language improvement needed',
                    'Pathway programs to degree',
                    'Consider improving academic record first'
                ],
                color: 'red'
            };
        }
    };

    const eligibility = inputValue ? getEligibility(gpa, scale) : null;

    const handleInputTypeChange = (newType: 'percentage' | 'cgpa') => {
        const currentValue = parseFloat(inputValue);

        if (!isNaN(currentValue) && inputValue) {
            if (inputType === 'percentage' && newType === 'cgpa') {
                // Convert percentage to CGPA (10.0 scale)
                // Approximate conversion: percentage / 10 = CGPA
                const convertedValue = (currentValue / 10).toFixed(2);
                setInputValue(convertedValue);
            } else if (inputType === 'cgpa' && newType === 'percentage') {
                // Convert CGPA (10.0 scale) to percentage
                // Approximate conversion: CGPA * 10 = percentage
                const convertedValue = (currentValue * 10).toFixed(2);
                setInputValue(convertedValue);
            }
        }

        setInputType(newType);
    };


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/tools/checklist-bg.png"
                        alt="GPA Converter"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>
                <div className="relative h-full flex flex-col justify-center">
                    <div className="container-custom">
                        <div className="max-w-3xl">
                            <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-6">
                                <GraduationCap className="w-8 h-8 text-primary-600" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                GPA Converter
                            </h1>
                            <p className="text-xl text-white/90">
                                Convert your Indian percentage or CGPA to international GPA scales for university applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Converter */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Input */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Marks</h2>

                                <div className="space-y-6">
                                    {/* Input Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Select Input Type
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => handleInputTypeChange('percentage')}
                                                className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${inputType === 'percentage'
                                                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                    }`}
                                            >
                                                Percentage
                                            </button>
                                            <button
                                                onClick={() => handleInputTypeChange('cgpa')}
                                                className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${inputType === 'cgpa'
                                                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                    }`}
                                            >
                                                CGPA (10.0)
                                            </button>
                                        </div>
                                    </div>

                                    {/* Input Value */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Enter Your {inputType === 'percentage' ? 'Percentage' : 'CGPA'}
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder={inputType === 'percentage' ? 'e.g., 85' : 'e.g., 8.5'}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                                        />
                                    </div>

                                    {/* Output Scale */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Convert to GPA Scale
                                        </label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {(['4.0', '5.0', '10.0'] as const).map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => setScale(s)}
                                                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${scale === s
                                                        ? 'border-primary-600 bg-primary-50 text-primary-700'
                                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                                        }`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <p className="text-sm text-blue-800">
                                            <strong>Note:</strong> This is an approximate conversion. Different universities may use different conversion formulas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Output */}
                            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white">
                                <h2 className="text-2xl font-bold mb-6">Converted GPA</h2>

                                <div className="text-center py-8">
                                    <div className="text-6xl font-bold mb-4">
                                        {inputValue ? gpa.toFixed(2) : '0.00'}
                                    </div>
                                    <div className="text-xl opacity-90">
                                        on {scale} scale
                                    </div>
                                    {scale === '4.0' && inputValue && (
                                        <div className="mt-4 text-2xl font-semibold">
                                            Grade: {getGrade(gpa, scale)}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/20">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="opacity-90">Your Input</span>
                                        <span className="font-semibold">
                                            {inputValue || '0'} {inputType === 'percentage' ? '%' : 'CGPA'}
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <h3 className="font-bold mb-4">GPA Scale Reference</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className={`flex justify-between py-2 border-b border-white/20 rounded-lg px-3 transition-colors ${scale === '4.0' ? 'bg-white/20' : ''
                                            }`}>
                                            <span className={scale === '4.0' ? 'font-semibold' : 'opacity-90'}>
                                                4.0 Scale {scale === '4.0' && '✓'}
                                            </span>
                                            <span className={scale === '4.0' ? 'font-bold' : 'opacity-90'}>USA, Canada</span>
                                        </div>
                                        <div className={`flex justify-between py-2 border-b border-white/20 rounded-lg px-3 transition-colors ${scale === '5.0' ? 'bg-white/20' : ''
                                            }`}>
                                            <span className={scale === '5.0' ? 'font-semibold' : 'opacity-90'}>
                                                5.0 Scale {scale === '5.0' && '✓'}
                                            </span>
                                            <span className={scale === '5.0' ? 'font-bold' : 'opacity-90'}>Germany</span>
                                        </div>
                                        <div className={`flex justify-between py-2 rounded-lg px-3 transition-colors ${scale === '10.0' ? 'bg-white/20' : ''
                                            }`}>
                                            <span className={scale === '10.0' ? 'font-semibold' : 'opacity-90'}>
                                                10.0 Scale {scale === '10.0' && '✓'}
                                            </span>
                                            <span className={scale === '10.0' ? 'font-bold' : 'opacity-90'}>India</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Eligibility - Third Column */}
                            <div className="space-y-6">
                                {eligibility && (
                                    <div className={`rounded-2xl shadow-lg p-6 border-2 ${eligibility.color === 'green' ? 'bg-green-50 border-green-200' :
                                        eligibility.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                                            eligibility.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                                                eligibility.color === 'orange' ? 'bg-orange-50 border-orange-200' :
                                                    'bg-red-50 border-red-200'
                                        }`}>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-2xl">
                                                {eligibility.color === 'green' ? '🎓' :
                                                    eligibility.color === 'blue' ? '📚' :
                                                        eligibility.color === 'yellow' ? '📖' :
                                                            eligibility.color === 'orange' ? '📝' : '📋'}
                                            </span>
                                            <h3 className={`font-bold text-lg ${eligibility.color === 'green' ? 'text-green-800' :
                                                eligibility.color === 'blue' ? 'text-blue-800' :
                                                    eligibility.color === 'yellow' ? 'text-yellow-800' :
                                                        eligibility.color === 'orange' ? 'text-orange-800' :
                                                            'text-red-800'
                                                }`}>
                                                Your Eligibility: {eligibility.tier}
                                            </h3>
                                        </div>

                                        <div className="mb-4">
                                            <p className={`text-sm font-semibold mb-2 ${eligibility.color === 'green' ? 'text-green-700' :
                                                eligibility.color === 'blue' ? 'text-blue-700' :
                                                    eligibility.color === 'yellow' ? 'text-yellow-700' :
                                                        eligibility.color === 'orange' ? 'text-orange-700' :
                                                            'text-red-700'
                                                }`}>
                                                Eligible Universities:
                                            </p>
                                            <p className={`text-sm ${eligibility.color === 'green' ? 'text-green-800' :
                                                eligibility.color === 'blue' ? 'text-blue-800' :
                                                    eligibility.color === 'yellow' ? 'text-yellow-800' :
                                                        eligibility.color === 'orange' ? 'text-orange-800' :
                                                            'text-red-800'
                                                }`}>
                                                {eligibility.universities}
                                            </p>
                                        </div>

                                        <div>
                                            <p className={`text-sm font-semibold mb-2 ${eligibility.color === 'green' ? 'text-green-700' :
                                                eligibility.color === 'blue' ? 'text-blue-700' :
                                                    eligibility.color === 'yellow' ? 'text-yellow-700' :
                                                        eligibility.color === 'orange' ? 'text-orange-700' :
                                                            'text-red-700'
                                                }`}>
                                                Program Options:
                                            </p>
                                            <ul className="space-y-1">
                                                {eligibility.programs.map((program, index) => (
                                                    <li key={index} className={`text-sm flex items-start gap-2 ${eligibility.color === 'green' ? 'text-green-800' :
                                                        eligibility.color === 'blue' ? 'text-blue-800' :
                                                            eligibility.color === 'yellow' ? 'text-yellow-800' :
                                                                eligibility.color === 'orange' ? 'text-orange-800' :
                                                                    'text-red-800'
                                                        }`}>
                                                        <span className="mt-1">•</span>
                                                        <span>{program}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="font-bold text-gray-900 mb-3">💡 Important Notes</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Always check university-specific requirements</li>
                                        <li>• Some universities use their own conversion formulas</li>
                                        <li>• WES evaluation may be required for official conversion</li>
                                        <li>• Keep original transcripts for verification</li>
                                    </ul>
                                </div>

                                <Button
                                    className="w-full"
                                    size="lg"
                                    onClick={() => window.open(generateWhatsAppLink('919824372321', 'Hi, I need expert guidance for GPA conversion and university selection.'), '_blank')}
                                >
                                    Get Expert Guidance
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GPAConverterPage;
