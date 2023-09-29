import React from 'react'

function Home() {
    return (
        <>
            <div class="relative w-ful mt-8">
                <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                    <div class="mt-10 px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
                        
                        <h1 class="text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                            People who care about your growth
                        </h1>
                        <p class="mt-8 text-lg text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                            modi blanditiis dolores quasi eaque explicabo!
                        </p>
                        <form action="" class="mt-8 flex items-start space-x-2">
                            <div>
                                <input
                                    class="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="email"
                                    placeholder="Enter your email"
                                    id="email"
                                />
                                <p class="mt-2 text-sm text-gray-500">We care about your privacy</p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    class="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
                        <img
                            class="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                            src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                            alt=""
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home
