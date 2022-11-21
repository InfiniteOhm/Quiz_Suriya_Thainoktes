import { ElementRef, Injectable } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import Editor from '@arcgis/core/widgets/Editor';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  map!: Map;
  mapView!: MapView;
  latitude: number = 13;
  longtitude: number = 100;
  featureLayer!: FeatureLayer;
  constructor() {}

  initialMap(divMap: ElementRef) {
    this.map = new Map({
      basemap: 'topo-vector',
    });
    this.mapView = new MapView({
      map: this.map,
      container: divMap.nativeElement,
      zoom: 14,
      center: [100.58, 14.356],
    });

    this.mapView.when(() => {
      const napervilleLayer = new MapImageLayer({
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/NapervilleShelters/MapServer',
      });

      this.featureLayer = new FeatureLayer({
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/NapervilleShelters/FeatureServer/0',
        popupTemplate: {
          title: 'Shelter: {facname}',
          content: 'Capacity:{capacity}',
        },
      });

      this.map.add(napervilleLayer);
      this.map.add(this.featureLayer);
      this.intialWidgetEditor();
    });
  }

  intialWidgetEditor() {
    const editor = new Editor({
      view: this.mapView,
    });
    this.mapView.ui.add(editor, 'top-right');
  }
}
