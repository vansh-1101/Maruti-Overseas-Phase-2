import { useState } from 'react';
import { Calculator, DollarSign, Home, Plane, Book, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { countries } from '@/data';
import { generateWhatsAppLink } from '@/lib/utils';

const CostCalculatorPage = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [duration, setDuration] = useState(1);
    const [tuition, setTuition] = useState('');
    const [accommodation, setAccommodation] = useState('');
    const [food, setFood] = useState('');
    const [transport, setTransport] = useState('');
    const [miscellaneous, setMiscellaneous] = useState('');

    const countryDefaults: Record<string, { tuition: number; accommodation: number; food: number; transport: number }> = {
        'USA': { tuition: 30000, accommodation: 12000, food: 3600, transport: 1200 },
        'UK': { tuition: 25000, accommodation: 10000, food: 3000, transport: 1000 },
        'Canada': { tuition: 20000, accommodation: 9000, food: 3000, transport: 1000 },
        'Australia': { tuition: 28000, accommodation: 11000, food: 3500, transport: 1200 },
        'Germany': { tuition: 5000, accommodation: 8000, food: 2500, transport: 800 },
        'Ireland': { tuition: 18000, accommodation: 9000, food: 3000, transport: 1000 },
        'New Zealand': { tuition: 22000, accommodation: 10000, food: 3200, transport: 1000 },
    };

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
        const defaults = countryDefaults[country];
        if (defaults) {
            setTuition(defaults.tuition.toString());
            setAccommodation(defaults.accommodation.toString());
            setFood(defaults.food.toString());
            setTransport(defaults.transport.toString());
            setMiscellaneous('2000');
        }
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
                                <p className="text-sm text-gray-600 mb-6">Enter your details to calculate estimated costs. Placeholders show typical values.</p>

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
                                                    {country.flag} {country.name}
                                                </option>
                                            ))}
                                        </select>
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
                                    onClick={() => window.open(generateWhatsAppLink('919824372321', 'Hi, I need personalized counseling for studying abroad and cost planning.'), '_blank')}
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
