import React, { Component } from "react";
import "./Products.css";

class Producst extends Component {
  render() {
    return (
      <div>
        <div className="2xl:container 2xl:mx-auto mt-20">
          <div className="lg:px-6 md:px-4 px-2 md:py-12 py-8">
            <div>
              <h1 className="text-2xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">
                Top Selling
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-6">
              <div class="bg-gray-50 dark:bg-gray-800 p-8">
                <div class="">
                  <h2 class="text-xl text-gray-600 dark:text-white">
                    lipstick
                  </h2>
                  <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                </div>
                <div class="flex justify-center items-center mt-8 md:mt-24">
                  <img
                    class=""
                    src="https://images.unsplash.com/photo-1593939202577-6bf5b21cb507?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="A chair with designed back"
                    role="img"
                  />
                </div>
                <div class="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                  
                  <button
                    aria-label="show in white color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="white"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="show in black color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#111827"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 p-8">
                <div class="">
                  <h2 class="text-xl text-gray-600 dark:text-white">
                    High heels
                  </h2>
                  <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                </div>
                <div class="flex justify-center items-center mt-8 md:mt-24">
                  <img
                    class=""
                    src="https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhpZ2glMjBoZWVsc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="A chair with wooden legs"
                    role="img"
                  />
                </div>
                <div class="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                  <button
                    aria-label="show in white color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="white"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="show in black color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#111827"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 p-8">
                <div class="">
                  <h2 class="text-xl text-gray-600 dark:text-white">
                    Long Dresses
                  </h2>
                  <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                </div>
                <div class="flex justify-center items-center mt-8 md:mt-24">
                  <img
                    class=""
                    src="https://images.unsplash.com/photo-1623580674393-edf6eb7090f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRyZXNzfGVufDB8fDB8fHww"
                    alt="A sofa chair with wooden legs"
                    role="img"
                  />
                </div>
                <div class="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                  <button
                    aria-label="show in green color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#047857"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="show in brown color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#92400E"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
              <div class="bg-gray-50 dark:bg-gray-800 p-8">
                <div>
                  <h2 class="text-xl leading-tight text-gray-600 dark:text-white">
                    Skirts
                  </h2>
                  <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                </div>
                <div class="flex justify-center items-center mt-28 md:mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1606963555538-0dda6d785941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHNraXJ0c3xlbnwwfDB8MHx8fDA%3D"
                    alt="A large sectional sofa"
                    role="img"
                  />
                </div>
                <div class="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                  <button
                    aria-label="show in yellow color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#F59E0B"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="show in light gray color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#9CA3AF"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-800 p-8">
                <div>
                  <h2 class="text-xl leading-tight text-gray-600 dark:text-white">
                    Tops
                  </h2>
                  <p class="text-xl font-semibold text-gray-800 dark:text-white mt-2"></p>
                </div>
                <div class="flex justify-center items-center mt-28 md:mt-1">
                  <img
                    src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9wc3xlbnwwfDB8MHx8fDA%3D"
                    alt="A beautiful two seater sofa"
                    role="img"
                  />
                </div>
                <div class="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                  <button
                    aria-label="show in black color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#111827"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="show in green color"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5"
                        r="4.75"
                        fill="#047857"
                        stroke="#6B7280"
                        stroke-width="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section for cards */}

        <section className="py-8 sm:py-12 bg-white">
          <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
            <div class="mx-auto max-w-screen-xl px-4 w-full">
              <h2 class="mb-4 font-bold text-xl text-gray-900">Trending</h2>
              <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://cdn.pixabay.com/photo/2023/10/16/05/01/dress-8318436_640.jpg" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://images.unsplash.com/photo-1589565944201-d5ee383f28fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3NzfGVufDB8MHwwfHx8MA%3D%3D" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://picsum.photos/400/400" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://picsum.photos/400/400" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://picsum.photos/400/400" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://picsum.photos/400/400" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://picsum.photos/400/400" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <a
                    href=""
                    class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </a>
                  
                  <div class="h-auto overflow-hidden">
                    <div class="h-44 overflow-hidden relative">
                      <img src="https://picsum.photos/400/400" alt="" />
                    </div>
                  </div>
                  <div class="bg-white py-4 px-3">
                    <div class="flex justify-between items-center">
                      <button class="CartBtn">
                        <span class="IconContainer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 576 512"
                            fill="rgb(17, 17, 17)"
                            class="cart"
                          >
                            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                          </svg>
                        </span>
                        <p class="text">Add to Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Producst;
