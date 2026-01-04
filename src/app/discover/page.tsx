import { PageLayout } from 'shared/components/layouts'
import { DiscoverBannerBlock, DiscoverPreviewBlock, DiscoverWeeklyTopBlock } from 'shared/features/discover'

export const DiscoverPage: React.FC = () => {
  return (
    <PageLayout>
      <DiscoverPreviewBlock />
      <DiscoverWeeklyTopBlock />
      <DiscoverBannerBlock />
    </PageLayout>
  )
}
