<template>
  <sm-web-map server-url='https://iportal.supermap.io/iportal/'
              map-id='801571284'></sm-web-map>
</template>

<script>
export default {
  name: 'SupermapVue',
  data () {
    return {
      msg: 'map-vue',
      mapOptions: {
        container: 'map',
        style: {
          'version': 8,
          'sources': {
            'raster-tiles': {
              'type': 'raster',
              'tiles': [
                'https://iserver.supermap.io/iserver/services/map-china400/rest/maps/China/zxyTileImage.png?z={z}&x={x}&y={y}'
              ],
              'tileSize': 256
            }
          },
          'layers': [{
            'id': 'simple-tiles',
            'type': 'raster',
            'source': 'raster-tiles',
            'minzoom': 0,
            'maxzoom': 22
          }]
        },
        center: [120.143, 30.236],
        zoom: 3
      }
    }
  }
}
</script>

<style scoped></style>
