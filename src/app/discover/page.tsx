import { PageLayout } from 'shared/components/layouts'
import { DiscoverBannerBlock, DiscoverPreviewBlock, DiscoverWeeklyTopBlock, useGetWeeklyNFTListQuery } from 'shared/features/discover'

export const DiscoverPage: React.FC = () => {
  const { data: weeklyList = [] } = useGetWeeklyNFTListQuery()

  return (
    <PageLayout>
      <DiscoverPreviewBlock />
      {!!weeklyList.length && <DiscoverWeeklyTopBlock weeklyList={weeklyList} />}
      <DiscoverBannerBlock />
    </PageLayout>
  )
}
