import React from 'react'

const Reviews = () => {
  return (
    <div class="max-w-5xl px-4 py-8 mx-auto mt-8">
  <section class="p-8 bg-indigo-500 rounded-lg">
    <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
      <div class="relative">
        <div class="aspect-w-1 aspect-h-1">
          <img
            src="https://www.hyperui.dev/photos/man-5.jpeg"
            alt=""
            class="object-cover rounded-lg"
          />
        </div>
      </div>

      <blockquote class="sm:col-span-2">
        <p class="text-xl font-medium sm:text-2xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          perspiciatis cumque neque ut nobis excepturi, quasi iure quisquam
          autem alias.
        </p>

        <cite class="inline-flex items-center mt-8 not-italic">
          <span class="hidden w-6 h-px bg-gray-800 sm:inline-block"></span>
          <p class="text-sm text-white uppercase sm:ml-3">
            <strong>Simon Cooper</strong>, Inbetweener Co.
          </p>
        </cite>
      </blockquote>
    </div>
  </section>
</div>
  )
}

export default Reviews