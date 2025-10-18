import {Bookmark, Share2, Heart, MessageCircle, TrendingUp} from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardAction} from '@/components/ui/card';

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
  return (
    <Card className="max-w-2xl overflow-hidden">
      <CardHeader>
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

      <CardContent className="px-0 py-0">
        <img src={imageUrl} alt="Post content" className="w-full aspect-square object-cover" />
      </CardContent>

      <CardFooter className="flex-col items-start gap-4">
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
            <span className="font-medium">{engagementRate}</span>
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
  );
}
