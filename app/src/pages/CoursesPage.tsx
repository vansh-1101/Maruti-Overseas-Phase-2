import { useState } from 'react';
import { Search, Filter, Clock, GraduationCap, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { trialCourses, foreignCourses } from '@/data';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const allCourses = [...trialCourses, ...foreignCourses];

  const filterCourses = (list: typeof trialCourses) => {
    return list.filter((course) => {
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.fullName?.toLowerCase() || '').includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  };

  const filteredTrialCourses = filterCourses(trialCourses);
  const filteredForeignCourses = filterCourses(foreignCourses);

  const categories = [...new Set(allCourses.map((c) => c.category))];
  const levels = [...new Set(allCourses.map((c) => c.level))];

  const CourseCard = ({ course }: { course: typeof trialCourses[0] }) => (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      {/* Card Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-xs font-bold shadow-sm">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {course.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 font-medium">
          {course.fullName}
        </p>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
          {course.description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6 py-4 border-t border-gray-50">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary-500" />
            {course.duration}
          </span>
          <span className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary-500" />
            {course.level}
          </span>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Available In</p>
          <div className="flex flex-wrap gap-2">
            {course.countries?.map((country) => (
              <div
                key={country}
                className="flex items-center gap-1 px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-xs border border-gray-100"
              >
                <MapPin className="w-3 h-3 text-gray-400" />
                {country}
              </div>
            ))}
          </div>
        </div>

        <Button
          className="w-full bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-300 group-hover:shadow-md"
          asChild
        >
          <a
            href="https://online.marutioverseas.in/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative w-full min-h-[400px] md:h-[500px] overflow-hidden flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        {/* World Map Background - Courses Variant */}
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
          <img
            src="/images/courses-bg.svg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Visibility Overlay */}
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="container-custom relative z-10 pt-32 pb-12 md:pt-0 md:pb-0">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Course Finder
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Find Your Perfect Course
            </h1>
            <p className="text-xl text-white/90">
              Explore our language preparation and foreign education programs.
              Filter by category, level, and destination.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px] h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-[180px] h-12">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Courses Grid (Main) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Programs & Trials
            </h2>
            <div className="text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
              Showing <span className="font-bold text-primary-600">{filteredTrialCourses.length}</span> programs
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrialCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredTrialCourses.length === 0 && filteredForeignCourses.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any courses matching your criteria. Try adjusting your filters or search terms.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Foreign Courses Grid (Secondary) */}
      {filteredForeignCourses.length > 0 && (
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-custom">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Explore Foreign Courses
              </h2>
              <p className="text-gray-500">
                Discover academic programs at top universities worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredForeignCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CoursesPage;
