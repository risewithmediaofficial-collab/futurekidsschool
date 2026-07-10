import { motion } from "framer-motion";

function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f5f5f5] px-4 py-20">
      <div className="page-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex min-h-[60vh] flex-col items-center justify-center text-center"
        >
          <div className="mb-8">
            <div className="inline-block rounded-full bg-[#d91f26]/10 p-4">
              <div className="text-5xl">🎉</div>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Coming Soon
          </h1>
          <p className="max-w-2xl text-lg text-gray-600">
            We are preparing exciting events and activities for our students. 
            Stay tuned for updates about upcoming school events, celebrations, and programs!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Events;
