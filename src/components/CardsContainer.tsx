import {SocialPostCard} from './SocialPostCard';
import {ScrollArea} from './ui/scroll-area';
import {Separator} from './ui/separator';

export const CardsContainer = () => {
  return (
    <ScrollArea className="mt-10">
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
    </ScrollArea>
  );
};
