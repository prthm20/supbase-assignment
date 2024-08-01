import { ThreeDCardDemo } from "./3dcard";

export default function Component() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        <ThreeDCardDemo 
          title="Database" 
          src='https://images.pexels.com/photos/18956505/pexels-photo-18956505/free-photo-of-illuminated-computer-server.jpeg?auto=compress&cs=tinysrgb&w=600' 
          content="Every project is a full Postgres database, the world's most trusted relational database."
          
        />
        <ThreeDCardDemo 
          title="Edge-functions" 
          src='https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flaunch-week-4%2Fthursday-functions%2Ffunctions-thumb.png&w=640&q=75' 
          content="Easily write custom code without deploying or scaling servers."
          className="w-full md:w-1/3 lg:w-1/4 p-4"
        />
        <ThreeDCardDemo 
          title="Authentication" 
          src='https://supabase.com/_next/image?url=%2Fimages%2Fproduct%2Fauth%2Fheader--dark.png&w=640&q=75' 
          content="Add user sign ups and logins, securing your data with Row Level Security."
          
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        <ThreeDCardDemo 
          title="Storage" 
          src='https://supabase.com/_next/image?url=%2Fimages%2Fproduct%2Fstorage%2Fheader--dark.png&w=640&q=75' 
          content="Store, organize, and serve large files, from videos to images."
          
        />
        <ThreeDCardDemo 
          title="Realtime" 
          src='https://supabase.com/images/realtime/icons/presence.svg' 
          content="Build multiplayer experiences with realtime data synchronization."
          
        />
        <ThreeDCardDemo 
          title="Vectors" 
          src='https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=600' 
          content="Integrate your favorite ML-models to store, index and search vector embeddings."
          
        />
      </div>
    </>
  );
}
