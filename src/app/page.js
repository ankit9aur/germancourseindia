export default function HomePage() {
  return (
    <main className="font-sans">
      <header className="flex justify-between items-center px-6 py-4 shadow bg-white z-10 relative">
        <img src="/logo.png" alt="German Course India Logo" className="h-10" />
        <div className="space-x-3">
          <button className="bg-purple-200 text-sm px-4 py-1 rounded hover:bg-purple-300 transition-all">Book Free Demo</button>
          <button className="bg-purple-300 text-sm px-4 py-1 rounded hover:bg-purple-400 transition-all">Get Quick Call Back</button>
        </div>
      </header>

      <section className="bg-gradient-to-r from-red-400 to-red-600 text-white p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            German Language Course - Job Guarantee Program
          </h1>
          <ul className="list-disc pl-5 space-y-1">
            <li>66 Hrs (45 Hrs Training+11 Hrs GD+10 Hrs Exam Prep) for Each Level.</li>
            <li>Master A1, A2, B1, B2, C1, C2 Levels of the German Language.</li>
            <li>Ace the Goethe Institute, TestDaF, and DSH Exam Preparations.</li>
          </ul>
          <div className="mt-4">
            <span className="text-yellow-300 font-bold">★ 4.9</span>
            <span className="ml-2">(2354 Ratings)</span>
            <span className="ml-2">2518 Learners</span>
          </div>

          <form className="bg-white text-black p-4 mt-6 rounded shadow max-w-md">
            <label className="block mb-2 text-sm font-medium">Download Course Brochure</label>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" required />
            <div className="flex gap-2 mb-2">
              <select className="w-1/3 p-2 border rounded">
                <option value="India">India (+91)</option>
              </select>
              <input type="text" placeholder="Mobile no *" className="w-2/3 p-2 border rounded" required />
            </div>
            <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
              Send Me Brochure »
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
