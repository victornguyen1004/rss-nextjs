import Link from "next/link";

export default function RssItem() {
  return (
    <Link
      href="/"
      class="rounded-3xl group overflow-hidden col-span-3 bg-white shadow-md"
    >
      <div class="h-56 relative overflow-hidden">
        <img
          src="https://placehold.co/800x1000"
          className="object-cover h-full w-full duration-500 group-hover:scale-105 scale-100"
        />
        <div class="bg-transparent group-hover:backdrop-blur-sm flex justify-center items-center group-hover:bg-accent/20 duration-200 w-full h-full absolute top-0 left-0">
          <div class="duration-200 opacity-0 group-hover:opacity-100 text-white text-xl border-white rounded-2xl border-4 py-2 px-4 font-semibold">
            View More
          </div>
        </div>
      </div>
      <div class="p-4">
        <div className="flex justify-between text-sm text-zinc-500">
          <span class="">
            <i class="fa-solid fa-calendar text-xs mr-2"></i>Date
          </span>
          <span class="">
            <i class="fa-solid fa-clock text-xs mr-2"></i>Time
          </span>
        </div>
        <div class="my-2 font-medium text-ellipsis line-clamp-2">
          Title fdjskfj kdsj fdsj fksdj fkjf ksjdk fsjdf ksdjf ksdjfk sdjf kds
        </div>
        <div class=" text-zinc-500 text-ellipsis line-clamp-3 h-20">
          Description kdjsa kdjs dksaj dksaj dksaj dksaj dkas jdsak jdksa jdsak
          djask j
        </div>
      </div>
    </Link>
  );
}
