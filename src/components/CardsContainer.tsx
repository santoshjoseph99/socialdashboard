import {SocialPostCard} from './SocialPostCard';
import {SocialProfileCard} from './SocialProfileCard';

export const CardsContainer = () => {
  return (
    <div className="mt-10 w-full overflow-x-hidden">
      <div className="flex flex-col gap-[10px] w-full max-w-3xl mx-auto">
        <SocialPostCard
          username="sophia_kim12"
          followers="15.4K"
          avatarUrl="/src/assets/avatar1.jpg"
          imageUrl="/src/assets/mainpic1.jpg"
          likes="20.1k"
          comments={234}
          engagementRate="24%"
          caption="Elevate your skincare routine to the next level! ⭐✨ Don't forget to share this with a friend who needs to try it out!"
          timestamp="March 15, 2025 at 2:30 PM"
          tags={['Skincare', 'Mini-influencer']}
        />
        <SocialProfileCard
          username="glowwithsana"
          fullName="Sana Ahmed"
          avatarUrl="/src/assets/avatar2.jpg"
          followers="12.3K"
          followerGrowth="+3.5% in last 7 days"
          followerGrowthPositive={true}
          engagementRate="-2%"
          engagementGrowth="-3.5% in last 7 days"
          engagementGrowthPositive={false}
          tags={['Skincare', 'Mini-influencer']}
          images={[
            '/src/assets/image1.jpg',
            '/src/assets/image2.jpg',
            '/src/assets/image3.jpg',
            '/src/assets/image4.jpg',
          ]}
        />
      </div>
    </div>
  );
};
