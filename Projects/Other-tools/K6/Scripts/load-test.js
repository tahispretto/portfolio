import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 50, // Número de usuários virtuais
  duration: '30s', // Duração do teste
};

export default function () {
  http.get('https://test-api.com/endpoint');
  sleep(1);
}
