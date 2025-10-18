import {Bookmark, Share2, Heart, MessageCircle, TrendingUp} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardAction} from '@/components/ui/card';
import {useEffect, useState} from 'react';

interface SocialPostCardProps {
  username: string;
  followers: string;
  avatarUrl: string;
  imageUrl: string;
  likes: string;
  comments: number;
  engagementRate: string;
  caption: string;
  timestamp: string;
  tags: string[];
}

export function SocialPostCard({
  username,
  followers,
  avatarUrl,
  imageUrl,
  likes,
  comments,
  engagementRate,
  caption,
  timestamp,
  tags,
}: SocialPostCardProps) {
  const [animatedRate, setAnimatedRate] = useState(0);

  useEffect(() => {
    // Parse the engagement rate (e.g., "24%" -> 24)
    const targetValue = parseFloat(engagementRate);

    if (isNaN(targetValue)) return;

    const duration = 1000; // 1 second
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentValue = easedProgress * targetValue;
      setAnimatedRate(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [engagementRate]);

  return (
    <div className="relative max-w-2xl">
      {/* Gradient border wrapper - only in dark mode */}
      <div
        className="dark:block hidden rounded-xl dark:p-[1.33px]"
        style={{
          background: `
            radial-gradient(69.43% 69.43% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%),
            radial-gradient(circle at 50% 50%, rgba(126, 129, 227, 0.5) 0%, rgba(126, 129, 227, 0.2) 100%),
            radial-gradient(54.8% 53% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)
          `,
        }}
      >
      {/* Card with gradient background - only in dark mode */}
      <Card className="overflow-hidden relative dark:border-0">
        <div
          className="dark:block hidden absolute inset-0 pointer-events-none rounded-xl"
          style={{
            background: 'linear-gradient(290.01deg, rgba(179, 152, 255, 0.08) 42.6%, rgba(255, 255, 255, 0) 103.07%)',
          }}
        />
        <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          <Avatar className="size-12">
            <AvatarImage src={avatarUrl} alt={username} />
            <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-base">{username}</div>
            <div className="text-sm text-muted-foreground">{followers} followers</div>
          </div>
        </div>
        <CardAction>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Bookmark className="size-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="size-5" />
            </Button>
          </div>
        </CardAction>
      </CardHeader>

      <CardContent className="px-0 py-0 relative z-10">
        <img src={imageUrl} alt="Post content" className="w-full aspect-square object-cover" />
      </CardContent>

      <CardFooter className="flex-col items-start gap-4 relative z-10">
        <div className="flex items-center gap-4 w-full">
          <div className="flex items-center gap-1.5">
            <Heart className="size-5" />
            <span className="font-medium">{likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="size-5" />
            <span className="font-medium">{comments}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto text-green-500">
            <TrendingUp className="size-4" />
            <span className="font-medium">{animatedRate.toFixed(0)}%</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed">{caption}</p>

        <time className="text-sm text-muted-foreground">{timestamp}</time>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
      </div>
    </div>
  );
}
