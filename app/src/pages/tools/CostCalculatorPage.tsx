import { useState } from 'react';
import { Calculator, DollarSign, Home, Plane, Book, ShoppingBag, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { countries } from '@/data';
import { generateWhatsAppLink } from '@/lib/utils';

/* ─── Program Levels ─── */
const PROGRAM_LEVELS = [
    { id: 'ug', label: 'UG (Bachelor\'s)', duration: 3 },
    { id: 'pg', label: 'PG (Master\'s)', duration: 2 },
    { id: 'diploma', label: 'Diploma / Certificate', duration: 1 },
    { id: 'phd', label: 'PhD / Doctorate', duration: 4 },
];

/* ─── Cost defaults: country → program → values ─── */
const COST_DATA: Record<string, Record<string, { tuition: number; accommodation: number; food: number; transport: number; misc: number }>> = {
    'USA': {
        ug:      { tuition: 25000, accommodation: 12000, food: 3600, transport: 1200, misc: 2500 },
        pg:      { tuition: 35000, accommodation: 14000, food: 4000, transport: 1400, misc: 2800 },
        diploma: { tuition: 15000, accommodation: 10000, food: 3200, transport: 1000, misc: 2000 },
        phd:     { tuition: 5000,  accommodation: 14000, food: 4000, transport: 1400, misc: 2500 },
    },
    'UK': {
        ug:      { tuition: 18000, accommodation: 9000,  food: 2800, transport: 900,  misc: 2000 },
        pg:      { tuition: 25000, accommodation: 11000, food: 3200, transport: 1100, misc: 2500 },
        diploma: { tuition: 12000, accommodation: 8000,  food: 2500, transport: 800,  misc: 1800 },
        phd:     { tuition: 4000,  accommodation: 11000, food: 3200, transport: 1100, misc: 2200 },
    },
    'Canada': {
        ug:      { tuition: 18000, accommodation: 8500,  food: 2800, transport: 900,  misc: 2000 },
        pg:      { tuition: 24000, accommodation: 10000, food: 3200, transport: 1100, misc: 2500 },
        diploma: { tuition: 14000, accommodation: 7500,  food: 2500, transport: 800,  misc: 1800 },
        phd:     { tuition: 3000,  accommodation: 10000, food: 3200, transport: 1100, misc: 2200 },
    },
    'Australia': {
        ug:      { tuition: 22000, accommodation: 10000, food: 3200, transport: 1100, misc: 2200 },
        pg:      { tuition: 30000, accommodation: 12000, food: 3800, transport: 1300, misc: 2800 },
        diploma: { tuition: 16000, accommodation: 9000,  food: 2800, transport: 1000, misc: 2000 },
        phd:     { tuition: 4000,  accommodation: 12000, food: 3800, transport: 1300, misc: 2500 },
    },
    'Germany': {
        ug:      { tuition: 500,   accommodation: 7000,  food: 2400, transport: 700,  misc: 1500 },
        pg:      { tuition: 1500,  accommodation: 8000,  food: 2800, transport: 800,  misc: 1800 },
        diploma: { tuition: 3000,  accommodation: 6500,  food: 2200, transport: 600,  misc: 1300 },
        phd:     { tuition: 0,     accommodation: 8000,  food: 2800, transport: 800,  misc: 1500 },
    },
    'Ireland': {
        ug:      { tuition: 14000, accommodation: 8000,  food: 2800, transport: 900,  misc: 1800 },
        pg:      { tuition: 20000, accommodation: 10000, food: 3200, transport: 1000, misc: 2200 },
        diploma: { tuition: 10000, accommodation: 7000,  food: 2500, transport: 800,  misc: 1500 },
        phd:     { tuition: 3000,  accommodation: 10000, food: 3200, transport: 1000, misc: 2000 },
    },
    'New Zealand': {
        ug:      { tuition: 18000, accommodation: 9000,  food: 3000, transport: 900,  misc: 2000 },
        pg:      { tuition: 24000, accommodation: 11000, food: 3400, transport: 1100, misc: 2500 },
        diploma: { tuition: 12000, accommodation: 8000,  food: 2600, transport: 800,  misc: 1800 },
        phd:     { tuition: 4000,  accommodation: 11000, food: 3400, transport: 1100, misc: 2200 },
    },
    'South Korea': {
        ug:      { tuition: 6000,  accommodation: 5500,  food: 2400, transport: 700,  misc: 1500 },
        pg:      { tuition: 10000, accommodation: 7000,  food: 2800, transport: 900,  misc: 1800 },
        diploma: { tuition: 4000,  accommodation: 5000,  food: 2200, transport: 600,  misc: 1200 },
        phd:     { tuition: 2000,  accommodation: 7000,  food: 2800, transport: 900,  misc: 1500 },
    },
    'Dubai': {
        ug:      { tuition: 15000, accommodation: 10000, food: 3500, transport: 1200, misc: 2500 },
        pg:      { tuition: 22000, accommodation: 13000, food: 4200, transport: 1500, misc: 3000 },
        diploma: { tuition: 10000, accommodation: 9000,  food: 3000, transport: 1000, misc: 2000 },
        phd:     { tuition: 5000,  accommodation: 13000, food: 4200, transport: 1500, misc: 2800 },
    },
    'Singapore': {
        ug:      { tuition: 18000, accommodation: 11000, food: 4000, transport: 1000, misc: 2200 },
        pg:      { tuition: 26000, accommodation: 14000, food: 4800, transport: 1300, misc: 2800 },
        diploma: { tuition: 12000, accommodation: 10000, food: 3500, transport: 900,  misc: 2000 },
        phd:     { tuition: 4000,  accommodation: 14000, food: 4800, transport: 1300, misc: 2500 },
    },
};

const CostCalculatorPage = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedProgram, setSelectedProgram] = useState('');
    const [duration, setDuration] = useState(1);
    const [tuition, setTuition] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [food, setFood] = useState('');
    const [transport, setTransport] = useState('');
    const [miscellaneous, setMiscellaneous] = useState('');

    const applyDefaults = (country: string, program: string) => {
        const countryData = COST_DATA[country];
        if (countryData && countryData[program]) {
            const d = countryData[program];
            setTuition(d.tuition.toString());
            setAccommodation(d.accommodation.toString());
            setFood(d.food.toString());
            setTransport(d.transport.toString());
            setMiscellaneous(d.misc.toString());
        }
        // Auto-set duration from program level
        const prog = PROGRAM_LEVELS.find(p => p.id === program);
        if (prog) setDuration(prog.duration);
    };

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
        if (selectedProgram) applyDefaults(country, selectedProgram);
    };

    const handleProgramChange = (program: string) => {
        setSelectedProgram(program);
        if (selectedCountry) applyDefaults(selectedCountry, program);
    };

    const tuitionNum = parseFloat(tuition as string) || 0;
    const accommodationNum = parseFloat(accommodation as string) || 0;
    const foodNum = parseFloat(food as string) || 0;
    const transportNum = parseFloat(transport as string) || 0;
    const miscellaneousNum = parseFloat(miscellaneous as string) || 0;

    const totalPerYear = tuitionNum + accommodationNum + foodNum + transportNum + miscellaneousNum;
    const totalCost = totalPerYear * duration;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/tools/calculator-bg.png"
                        alt="Cost Calculator"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>
                <div className="relative h-full flex flex-col justify-center">
                    <div className="container-custom">
                        <div className="max-w-3xl">
                            <div className="w-16 h-16 bg-white/90 rounded-2xl flex items-center justify-center mb-6">
                                <Calculator className="w-8 h-8 text-primary-600" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Study Abroad Cost Calculator
                            </h1>
                            <p className="text-xl text-white/90">
                                Estimate your total expenses for studying abroad including tuition, living costs, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Input Form */}
                            <div className="bg-white rounded-2xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Enter Your Details</h2>
                                <p className="text-sm text-gray-600 mb-6">Select country & program level to auto-fill estimated costs.</p>

                                <div className="space-y-6">
                                    {/* Country Selection */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Select Country
                                        </label>
                                        <select
                                            value={selectedCountry}
                                            onChange={(e) => handleCountryChange(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        >
                                            <option value="">Choose a country</option>
                                            {countries.map((country) => (
                                                <option key={country.slug} value={country.name}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Program Level */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <GraduationCap className="w-4 h-4 inline mr-2" />
                                            Program Level
                                        </label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {PROGRAM_LEVELS.map((prog) => (
                                                <button
                                                    key={prog.id}
                                                    type="button"
                                                    onClick={() => handleProgramChange(prog.id)}
                                                    className={`px-4 py-3 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                                                        selectedProgram === prog.id
                                                            ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
                                                            : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    {prog.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Duration */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Duration (Years)
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            value={duration}
                                            onChange={(e) => setDuration(Number(e.target.value))}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Tuition Fees */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <Book className="w-4 h-4 inline mr-2" />
                                            Annual Tuition Fees (USD)
                                        </label>
                                        <input
                                            type="number"
                                            value={tuition}
                                            onChange={(e) => setTuition(e.target.value)}
                                            placeholder="e.g., 30000"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Accommodation */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <Home className="w-4 h-4 inline mr-2" />
                                            Annual Accommodation (USD)
                                        </label>
                                        <input
                                            type="number"
                                            value={accommodation}
                                            onChange={(e) => setAccommodation(e.target.value)}
                                            placeholder="e.g., 12000"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Food */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <ShoppingBag className="w-4 h-4 inline mr-2" />
                                            Annual Food & Groceries (USD)
                                        </label>
                                        <input
                                            type="number"
                                            value={food}
                                            onChange={(e) => setFood(e.target.value)}
                                            placeholder="e.g., 3600"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Transport */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <Plane className="w-4 h-4 inline mr-2" />
                                            Annual Transport (USD)
                                        </label>
                                        <input
                                            type="number"
                                            value={transport}
                                            onChange={(e) => setTransport(e.target.value)}
                                            placeholder="e.g., 1200"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>

                                    {/* Miscellaneous */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            <DollarSign className="w-4 h-4 inline mr-2" />
                                            Annual Miscellaneous (USD)
                                        </label>
                                        <input
                                            type="number"
                                            value={miscellaneous}
                                            onChange={(e) => setMiscellaneous(e.target.value)}
                                            placeholder="e.g., 2000"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white">
                                    <h2 className="text-2xl font-bold mb-6">Cost Breakdown</h2>

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="text-white/90">Tuition Fees</span>
                                            <span className="font-semibold">${tuitionNum.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="text-white/90">Accommodation</span>
                                            <span className="font-semibold">${accommodationNum.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="text-white/90">Food & Groceries</span>
                                            <span className="font-semibold">${foodNum.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="text-white/90">Transport</span>
                                            <span className="font-semibold">${transportNum.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                            <span className="text-white/90">Miscellaneous</span>
                                            <span className="font-semibold">${miscellaneousNum.toLocaleString()}</span>
                                        </div>

                                        <div className="pt-4 mt-4 border-t-2 border-white/40">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-lg">Total Per Year</span>
                                                <span className="text-2xl font-bold">${totalPerYear.toLocaleString()}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg">Total for {duration} Year{duration > 1 ? 's' : ''}</span>
                                                <span className="text-3xl font-bold">${totalCost.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="font-bold text-gray-900 mb-3">💡 Pro Tips</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• Add 10-15% buffer for unexpected expenses</li>
                                        <li>• Consider part-time work opportunities</li>
                                        <li>• Research scholarship options to reduce costs</li>
                                        <li>• Exchange rates can significantly impact your budget</li>
                                    </ul>
                                </div>

                                <Button
                                    className="w-full"
                                    size="lg"
                                    onClick={() => window.open(generateWhatsAppLink('919824372395', 'Hi, I need personalized counseling for studying abroad and cost planning.'), '_blank')}
                                >
                                    Get Personalized Counseling
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CostCalculatorPage;
