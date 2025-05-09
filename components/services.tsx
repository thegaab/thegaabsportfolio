import { LayoutGrid, Smartphone, PaintBucket, Code } from "lucide-react"

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaborate with brands and agencies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">to create impactful results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <LayoutGrid className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">UX & UI</h3>
            <p className="text-gray-600 text-sm">
              Designing solutions that are intuitive, efficient, and enjoyable to use.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Web & Mobile App</h3>
            <p className="text-gray-600 text-sm">Transforming ideas into exceptional web and mobile app experiences.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <PaintBucket className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Design & Creative</h3>
            <p className="text-gray-600 text-sm">Creating unique visual designs that connect with your audience.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Development</h3>
            <p className="text-gray-600 text-sm">
              Bringing your vision to life with the latest technology and design trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
