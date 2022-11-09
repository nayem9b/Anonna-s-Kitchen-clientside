import React from "react";

const UserAddedService = () => {
  return (
    <div>
      <a href='#' class='group block overflow-hidden'>
        <img
          alt='Tee'
          src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          class='h-[350px] w-56 object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[450px]'
        />

        <div class='relative bg-white pt-4'>
          <h3 class='text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4'>
            Basic Tee
          </h3>

          <p class='mt-2'>
            <span class='sr-only'> Regular Price </span>

            <span class='tracking-wider'> £24.00 GBP </span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default UserAddedService;