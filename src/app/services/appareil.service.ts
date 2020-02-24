export class AppareilService {
    appareils = [
        {
          name: `Machine à laver`,
          status: `éteint`
        },
        {
          name: `Télévision`,
          status: `allumé`
        },
        {
          name: `Ordinateur`,
          status: `éteint`
        }
      ]

      switchOnAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'allumé';
          }
      }

      switchOfAll() {
          for(let appareil of this.appareils) {
              appareil.status = 'éteint';
          }
      }

      switchOnOne(i: number) {
          this.appareils[i].status = 'allumé';
      }

      switchOfOne(i: number) {
        this.appareils[i].status = 'éteint';
    }
}
