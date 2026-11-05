const Pricing = () => {
  return (
    <section id="pricing">
      <div className="w-full p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-3">
        <h3 className="text-blue-500 font-bold">Pricing</h3>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mt-2 text-center text-gray-400 font-medium text-xs sm:text-sm md:text-base">Choose the plan that fits your needs. All plans include core features and can be upgraded anytime. </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto px-4 py-10 gap-6">

            {/* Starter Card */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                
                <div className="flex flex-row md:flex-col h-full w-full">
                    <div className="flex flex-col w-1/2 md:w-full">
                        <h1 className="md:text-xl text-lg font-bold">Starter</h1>
                        <p className="md:text-sm text-xs text-gray-500 mt-2">Perfect for solo entrepreneurs </p>
                        <h1 className="md:text-4xl text-2xl font-bold mt-6">$19 <span className="text-gray-500 text-base font-normal">/month</span></h1>
                    </div>

                    <ol className="flex flex-col gap-3 mt-6 md:text-sm text-xs text-gray-600">
                        <li>✓ Lead management</li>
                        <li>✓ Basic sales analytics</li>
                        <li>✓ Customer management</li>
                    </ol>
                </div>

                <button className="mt-8 w-full py-3 rounded-xl text-blue-500 border-2 border-blue-500 font-semibold hover:bg-blue-600 hover:text-white transition-colors">Get Started</button>
            </div>

            {/* Professional card */}
            <div className="relative flex flex-col bg-white border-2 border-blue-500 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <button className="flex absolute bg-blue-500 text-white -top-3 w-fit px-2 py-1 text-xs rounded-2xl">Most popular</button>
                
                <div className="flex flex-row md:flex-col h-full w-full">
                    <div className="flex flex-col w-1/2 md:w-full">
                        <h1 className="md:text-xl text-lg font-bold">Professional</h1>
                        <p className="md:text-sm text-xs text-gray-500 mt-2">Ideal for growing business </p>
                        <h1 className="md:text-4xl text-2xl font-bold mt-6">$49 <span className="text-gray-500 text-base font-normal">/month</span></h1>
                    </div>

                    <ol className="flex flex-col gap-3 mt-6 md:text-sm text-xs text-gray-600">
                        <li>✓ Upto 2000 leads</li>
                        <li>✓ Advanced analytics</li>
                        <li>✓ Team collaboration</li>
                        <li>✓ Priority support</li>
                    </ol>
                </div>

                <button className="mt-8 w-full py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">Get Started</button>
            </div>

            {/* Enterprise card */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                
                <div className="flex flex-row md:flex-col h-full w-full">
                    <div className="flex flex-col w-1/2 md:w-full">
                        <h1 className="md:text-xl font-bold text-lg">Enterprise</h1>
                        <p className="md:text-sm text-xs text-gray-500 mt-2">For larger teams and companies </p>
                        <h1 className="md:text-4xl text-2xl font-bold mt-6">$99 <span className="text-gray-500 text-base font-normal">/month</span></h1>
                    </div>

                    <ol className="flex flex-col gap-3 mt-6 text-xs md:text-sm text-gray-600">
                        <li>✓ Unlimited leads</li>
                        <li>✓ Custom integrations</li>
                        <li>✓ Dedicated support</li>
                        <li>✓ Advanced security</li>
                    </ol>
                </div>

                <button className="mt-8 w-full py-3 rounded-xl border-2 border-blue-500 text-blue-500 hover:text-white md:font-semibold font-medium hover:bg-blue-600 transition-colors">Get Started</button>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Pricing
