import { MediaHero, MediaRow } from '../components'
import { series } from '../data/catalog'

function Series() {
  const bestSeries = [...series].sort((firstSeries, secondSeries) => secondSeries.score - firstSeries.score)
  const actionSeries = series.filter((item) => item.genre === 'Ação')
  const comedySeries = series.filter((item) => item.genre === 'Comédia')
  const suspenseSeries = series.filter((item) => item.genre === 'Suspense')

  return (
    <>
      <MediaHero eyebrow="Séries em destaque" items={series} actionHref="#/series" />
      <section className="streaming-home catalog-page-rails">
        <MediaRow title="Séries em destaque" items={series} action="#/series" />
        <MediaRow title="Melhores séries" items={bestSeries} action="#/series" />
        <MediaRow title="Séries de ação" items={actionSeries} action="#/series" />
        <MediaRow title="Séries de comédia" items={comedySeries} action="#/series" />
        <MediaRow title="Séries de suspense" items={suspenseSeries} action="#/series" />
      </section>
    </>
  )
}

Series.pageTitle = 'CAVEFLIX | Séries'

export default Series
