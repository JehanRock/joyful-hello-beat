import { Sparkles, TrendingDown, Zap, PiggyBank } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const insights = [
  {
    icon: TrendingDown,
    text: 'You spent 40% more on weekends compared to weekdays this month',
    suggestion: 'Try planning weekend activities in advance to reduce impulse spending',
  },
  {
    icon: Zap,
    text: 'You could save $50/month by optimizing your subscriptions',
    suggestion: 'Review your Netflix, Spotify, and other subscriptions',
  },
  {
    icon: PiggyBank,
    text: 'Your grocery spending decreased 15% this month - great job!',
    suggestion: 'Keep up the good work with meal planning',
  },
];

export function AIInsightCards() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">AI Insights</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card key={index} className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="mb-3 flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-relaxed">
                      {insight.text}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  💡 {insight.suggestion}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
