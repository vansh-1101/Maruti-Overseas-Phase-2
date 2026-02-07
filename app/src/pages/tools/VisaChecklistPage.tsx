    import { useState } from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { countries } from '@/data';
import { generateWhatsAppLink } from '@/lib/utils';

const VisaChecklistPage = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

    const checklists: Record<string, string[]> = {
        'USA': [
            'Valid Passport (minimum 6 months validity)',
            'I-20 Form from university',
            'DS-160 Confirmation page',
            'SEVIS Fee payment receipt',
            'Visa application fee receipt',
            'Passport-size photographs (2)',
            'Academic transcripts and certificates',
            'Standardized test scores (TOEFL/IELTS, GRE/GMAT)',
            'Financial documents (bank statements, sponsor letters)',
            'Proof of ties to home country',
            'Resume/CV',
            'Statement of Purpose',
        ],
        'UK': [
            'Valid Passport',
            'CAS (Confirmation of Acceptance for Studies)',
            'Visa application form',
            'Tuberculosis test results',
            'Passport-size photographs',
            'Academic qualifications',
            'English language test results (IELTS/PTE)',
            'Financial evidence (28-day bank statements)',
            'Accommodation confirmation',
            'Visa application fee payment',
            'IHS (Immigration Health Surcharge) payment',
        ],
        'Canada': [
            'Valid Passport',
            'Letter of Acceptance from DLI',
            'Proof of financial support',
            'Statement of Purpose',
            'Academic transcripts',
            'Language test results (IELTS/CELPIP)',
            'Medical examination results',
            'Police clearance certificate',
            'Passport-size photographs',
            'Visa application fee receipt',
            'Biometrics fee payment',
            'GIC certificate (if applicable)',
        ],
        'Australia': [
            'Valid Passport',
            'Confirmation of Enrolment (CoE)',
            'Genuine Temporary Entrant (GTE) statement',
            'Financial capacity evidence',
            'English proficiency test (IELTS/PTE)',
            'Academic documents',
            'Health insurance (OSHC)',
            'Medical examination',
            'Character documents (police clearance)',
            'Passport photographs',
            'Visa application fee',
        ],
        'Germany': [
            'Valid Passport',
            'University admission letter',
            'Blocked account confirmation (€11,208)',
            'Health insurance proof',
            'Academic certificates',
            'Language proficiency (German/English)',
            'Motivation letter',
            'CV/Resume',
            'Passport photographs',
            'Visa application form',
            'Proof of accommodation',
        ],
        'Ireland': [
            'Valid Passport',
            'Letter of offer from institution',
            'Proof of fees payment',
            'Evidence of €10,000 in bank',
            'Academic transcripts',
            'English language test results',
            'Private medical insurance',
            'Explanation of gaps in education',
            'Passport photographs',
            'Visa application fee',
        ],
        'New Zealand': [
            'Valid Passport',
            'Offer of Place from institution',
            'Proof of funds (NZ$20,000/year)',
            'Medical certificate',
            'Police certificate',
            'Academic transcripts',
            'IELTS/PTE scores',
            'Chest X-ray (if required)',
            'Visa application form',
            'Passport photographs',
            'Visa fee payment',
        ],
    };

    // Map country display names to checklist keys
    const getChecklistKey = (countryName: string): string => {
        const mapping: Record<string, string> = {
            'United States': 'USA',
            'United Kingdom': 'UK',
            'Canada': 'Canada',
            'Australia': 'Australia',
            'Germany': 'Germany',
            'Ireland': 'Ireland',
            'New Zealand': 'New Zealand'
        };
        return mapping[countryName] || countryName;
    };

    const checklistKey = getChecklistKey(selectedCountry);
    const selectedChecklist = checklistKey ? checklists[checklistKey] || [] : [];
    const completedCount = checkedItems.size;
    const totalCount = selectedChecklist.length;
    const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

    const toggleItem = (index: number) => {
        const newCheckedItems = new Set(checkedItems);
        if (newCheckedItems.has(index)) {
            newCheckedItems.delete(index);
        } else {
            newCheckedItems.add(index);
        }
        setCheckedItems(newCheckedItems);
    };

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
        setCheckedItems(new Set()); // Reset checklist when country changes
    };

    const handleDownloadPDF = () => {
        // Trigger browser print dialog which allows saving as PDF
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/tools/checklist-bg.png"
                        alt="Visa Checklist"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>
                <div className="relative h-full flex flex-col justify-center">
                    <div className="container-custom">
                        <div className="max-w-3xl">
                            <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-6">
                                <FileText className="w-8 h-8 text-primary-600" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Visa Document Checklist
                            </h1>
                            <p className="text-xl text-white/90">
                                Complete checklist of documents required for your student visa application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklist */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        {/* Country Selection */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Destination</h2>
                            <select
                                value={selectedCountry}
                                onChange={(e) => handleCountryChange(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                            >
                                <option value="">Choose a country</option>
                                {countries.map((country) => (
                                    <option key={country.slug} value={country.name}>
                                        {country.flag} {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Checklist Display */}
                        {selectedCountry && (
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {selectedCountry} Student Visa Checklist
                                        </h2>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {completedCount} of {totalCount} documents completed ({progressPercentage}%)
                                        </p>
                                    </div>
                                    <Button variant="outline" onClick={handleDownloadPDF}>
                                        <Download className="w-4 h-4 mr-2" />
                                        Download PDF
                                    </Button>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-6">
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out"
                                            style={{ width: `${progressPercentage}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {selectedChecklist.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => toggleItem(index)}
                                            className={`flex items-start gap-3 p-4 rounded-lg transition-all cursor-pointer ${checkedItems.has(index)
                                                ? 'bg-primary-50 border-2 border-primary-200'
                                                : 'hover:bg-gray-50 border-2 border-transparent'
                                                }`}
                                        >
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${checkedItems.has(index)
                                                    ? 'border-primary-600 bg-primary-600'
                                                    : 'border-gray-300 bg-white'
                                                    }`}>
                                                    {checkedItems.has(index) && (
                                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <p className={`font-medium transition-all ${checkedItems.has(index)
                                                    ? 'text-primary-700 line-through'
                                                    : 'text-gray-700'
                                                    }`}>{item}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                        <p className="text-sm text-yellow-800">
                                            <strong>Important:</strong> Requirements may vary based on your specific situation and university. Always verify with the official embassy/consulate website.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className={`rounded-lg p-4 transition-colors ${progressPercentage === 100 ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
                                            }`}>
                                            <h4 className="font-semibold text-gray-900 mb-2">📋 Progress</h4>
                                            <p className="text-3xl font-bold text-primary-600">{completedCount}/{totalCount}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h4 className="font-semibold text-gray-900 mb-2">📊 Completion</h4>
                                            <p className="text-3xl font-bold text-primary-600">{progressPercentage}%</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <h4 className="font-semibold text-gray-900 mb-2">⏱️ Processing Time</h4>
                                            <p className="text-lg font-semibold text-gray-700">
                                                {selectedCountry === 'USA' && '3-5 days after interview'}
                                                {selectedCountry === 'UK' && '3 weeks'}
                                                {selectedCountry === 'Canada' && '4-8 weeks'}
                                                {selectedCountry === 'Australia' && '4-8 weeks'}
                                                {selectedCountry === 'Germany' && '6-12 weeks'}
                                                {selectedCountry === 'Ireland' && '4-8 weeks'}
                                                {selectedCountry === 'New Zealand' && '4-6 weeks'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={() => window.open(generateWhatsAppLink('919824372321', `Hi, I need assistance with my ${selectedCountry} student visa application.`), '_blank')}
                                    >
                                        Get Visa Filing Assistance
                                    </Button>
                                </div>
                            </div>
                        )}

                        {!selectedCountry && (
                            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Select a Country
                                </h3>
                                <p className="text-gray-600">
                                    Choose your destination country to view the complete visa document checklist
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisaChecklistPage;
