import {
  LightbulbIcon,
  ExternalLink,
  Users,
  TrendingUp,
  TrendingDown,
  ChevronRight,
} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {Carousel, CarouselContent, CarouselItem, CarouselNext} from '@/components/ui/carousel';

interface SocialProfileCardProps {
  username: string;
  fullName: string;
  avatarUrl: string;
  followers: string;
  followerGrowth: string;
  followerGrowthPositive: boolean;
  engagementRate: string;
  engagementGrowth: string;
  engagementGrowthPositive: boolean;
  tags: string[];
  images: string[];
}

export function SocialProfileCard({
  username,
  fullName,
  avatarUrl,
  followers,
  followerGrowth,
  followerGrowthPositive,
  engagementRate,
  engagementGrowth,
  engagementGrowthPositive,
  tags,
  images,
}: SocialProfileCardProps) {
  return (
    <div className="relative w-full">
      {/* Gradient border wrapper - only visible in dark mode */}
      <div
        className="rounded-xl dark:p-[1.33px]"
        style={{
          background: `
            radial-gradient(69.43% 69.43% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 100%),
            radial-gradient(circle at 50% 50%, rgba(126, 129, 227, 0.5) 0%, rgba(126, 129, 227, 0.2) 100%),
            radial-gradient(54.8% 53% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)
          `,
        }}
      >
        <Card className="overflow-hidden w-full p-3 sm:p-6 dark:border-0 relative">
          {/* Gradient background - only in dark mode */}
          <div
            className="dark:block hidden absolute inset-0 pointer-events-none rounded-xl"
            style={{
              background:
                'linear-gradient(290.01deg, rgba(179, 152, 255, 0.08) 42.6%, rgba(255, 255, 255, 0) 103.07%)',
            }}
          />
          {/* Header Section */}
          <div className="flex items-start justify-between mb-4 sm:mb-6 relative z-10">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
              <Avatar className="size-16 sm:size-24 ring-2 sm:ring-4 ring-blue-400/30 shrink-0">
                <AvatarImage src={avatarUrl} alt={username} />
                <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h2 className="text-base sm:text-xl font-semibold truncate text-left">{username}</h2>
                <p className="text-muted-foreground text-xs sm:text-sm truncate text-left">{fullName}</p>
                <div className="flex gap-2 mt-2">
                  {tags.map((tag, index) => {
                    let colorClasses = '';
                    let customStyle = {};

                    if (index === 0) {
                      colorClasses = 'border-blue-400 text-blue-400 dark:border-blue-200 dark:text-blue-200';
                    } else if (index === 1) {
                      colorClasses = 'border-pink-400 text-pink-400 dark:border-pink-200 dark:text-pink-200';
                    } else if (index === 2) {
                      customStyle = {
                        borderColor: '#4EC0E0',
                        color: '#4EC0E0',
                      };
                    }

                    return (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`rounded-full py-1.5 ${colorClasses}`}
                        style={index === 2 ? customStyle : undefined}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex shrink-0">
              <Button variant="ghost" size="icon" className="rounded-full">
                <LightbulbIcon className="size-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ExternalLink className="size-4" />
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 flex-wrap relative z-10">
            <div className="flex items-center gap-1 sm:gap-2 bg-muted/50 rounded-lg px-2 sm:px-3 py-1.5 min-w-0 flex-1">
              <Users className="size-3.5 text-muted-foreground shrink-0" />
              <div>
                <span className="font-semibold text-[10px]">{followers}</span>
                <span className="text-[9px] text-muted-foreground"> followers</span>
              </div>
              <div
                className={`flex items-center gap-0.5 text-[9px] ml-1 ${
                  followerGrowthPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {followerGrowthPositive ? (
                  <TrendingUp className="size-2" />
                ) : (
                  <TrendingDown className="size-2" />
                )}
                <span>{followerGrowth}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 bg-muted/50 rounded-lg px-2 sm:px-3 py-1.5 min-w-0 flex-1">
              <TrendingUp className="size-3.5 text-muted-foreground shrink-0" />
              <div>
                <span className="font-semibold text-[10px]">{engagementRate}</span>
              </div>
              <div
                className={`flex items-center gap-0.5 text-[9px] ml-1 ${
                  engagementGrowthPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {engagementGrowthPositive ? (
                  <TrendingUp className="size-2" />
                ) : (
                  <TrendingDown className="size-2" />
                )}
                <span>{engagementGrowth}</span>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full relative z-10"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Post ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 size-10 bg-black/50 hover:bg-black/70 border-0 text-white">
              <ChevronRight className="size-5" />
            </CarouselNext>
          </Carousel>
        </Card>
      </div>
    </div>
  );
}
