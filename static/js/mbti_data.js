const qnaList = [
  {
    q: '1. 여행지에서 식사할 때 나는?',
    a: [
      { answer: 'a. 구글 지도를 켜서 주변에 있는 맛집으로 결정한다', score: 3 },
      { answer: 'b. 이미 출발하기 전에 상황별로 짜 둔 코스가 다~ 있다', score: 1 },
      { answer: 'c. 주변에서 제일 왁자지껄한 식당으로 간다', score: 6 }
    ]
  },
  {
    q: '2. 보통 어떻게 걸으시나요?',
    a: [
      { answer: 'a. 큰 보폭으로 빨리', score: 6 },
      { answer: 'b. 좁은 보폭으로 빨리', score: 4 },
      { answer: 'c. 고개를 들고 보통 속도로', score: 7 },
      { answer: 'd. 고개를 숙이고 보통 속도로', score: 2 },
      { answer: 'e. 느린 속도로', score: 1 }
    ]
  },
  {
    q: '3. 사람들과 대화할 때 당신의 제스처는?',
    a: [
      { answer: 'a. 팔짱을 끼고 있다', score: 3 },
      { answer: 'b. 깍지를 끼고 있다', score: 2 },
      { answer: 'c. 한 손이나 양손을 주머니에 넣거나 엉덩이를 짚는다', score: 4 },
      { answer: 'd. 대화하는 사람을 툭툭 치거나 건드린다', score: 6 },
      { answer: 'e. 귀나 턱, 머리카락을 만진다', score: 5 }
    ]
  },
  {
    q: '4. 여행지에서 갑자기 불의의 사고가 났을 때 나는?',
    a: [
      { answer: 'a. 와이파이 되는 곳을 찾아다닌다', score: 3 },
      { answer: 'b. 해결 방법을 찾아본다', score: 5 },
      { answer: 'c. 그냥 집에 가고싶단 생각을 해본다', score: 2 },
    ]
  },
  {
    q: '5. 여행지를 선택할 때 어떤 곳을 더 선호하시나요?',
    a: [
      { answer: 'a. 자연 속 휴양지 느낌', score: 1 },
      { answer: 'b. 쇼핑을 즐길 수 있는 도심지', score: 4 },
      { answer: 'c. 문화 예술을 즐길 수 있는 작은 마을', score: 3 },
      { answer: 'd. 액티비티가 다양한 섬나라', score: 7 }
    ]
  },
  {
    q: '6. 파티나 모임에 갔을 때 어떻게 행동하시나요?',
    a: [
      { answer: 'a. 여기저기 인사하며, 임팩트 있게 등장한다', score: 10 },
      { answer: 'b. 조용히 들어가서 아는 사람이 있는지 찾아본다', score: 4 },
      { answer: 'c. 최대한 조용히 들어간다', score: 1 }
    ]
  },
  {
    q: '7. 같이 간 친구가 늦잠을 잤다면?',
    a: [
      { answer: 'a. 오히려 좋아. 휴식이 반갑다', score: 3 },
      { answer: 'b. 너가 밥 사!하고 쿨하게 넘긴다', score: 3 },
      { answer: 'c. 다음부턴 얘랑 어디 안가야겠다 다짐한다', score: 4 }
    ]
  },
  {
    q: '8. 숙소에 들어가서 제일 먼저 하는 행동은?',
    a: [
      { answer: 'a. 침대로 다이빙', score: 1 },
      { answer: 'b. 짐을 정리하고, 실내복으로 갈아입기', score: 1 },
      { answer: 'c. 우선 씻고 쉴 준비를 한다', score: 3 },
      { answer: 'd. 짐만 내려두고 바로 다시 나가기', score: 5 },
    ]
  },
]

const infoList = [
  {
    from: 12,
    to: 16,
    name: '뉴질랜드, 모리셔스, 핀란드',
    desc: '모임에서 당신은 누군가 먼저 다가와주길 기다리는 편이라 부끄럼을 좀 타거나 초조해합니다. 하지만 현실에서 당신은 다른 사람들과 잘 어울려 지냅니다. 단지 자신을 되돌아보고 재충전하기 위한 시간이 약간 필요할 뿐이죠. 누군가는 당신이 우유부단하다고 느낄 수 있지만, 그건 당신이 시간을 충분히 갖고 일하길 좋아하기 때문에 일을 완수하는 시간이 조금 미뤄지기 때문입니다.'
  },
  {
    from: 16,
    to: 20,
    name: '호주, 스위스',
    desc: '사람들은 당신이 꼼꼼하고 철저하다고 생각합니다. 심지어 종종 신경질적이라고 생각할 때도 있죠. 하지만 노력이 결실을 맺을 때 당신은 칭찬을 기쁘게 받아들입니다. (이것은 자기 자신을 받아들인다는 긍정적인 의미입니다.) 만약 당신이 충동적으로 행동한다면 사람들은 정말 놀랄 겁니다. 신중하게 행동하는 것은 대개 지혜를 드러내게 마련입니다. 당신은 친구들이 당신에게 조언을 구할 만큼 믿음직한 사람입니다.'
  },
  {
    from: 20,
    to: 24,
    name: '태국, 네덜란드',
    desc: '사람들은 당신이 분별 있고 현실적이며 겸손하다고 생각합니다. 당신은 당신에게 향하는 신뢰와 충성에 보답하는 사람으로 정평이 나 있습니다. 당신을 잘 아는 사람이라면 당신이 친구들에게 갖는 믿음을 깨거나 친구 사이를 이간질하기 어렵다는 걸 알 겁니다. 하지만 그 신뢰가 깨진다면, 당신은 꽤 큰 영향을 받습니다.'
  },
  {
    from: 24,
    to: 28,
    name: '캐나다, 프랑스',
    desc: '사람들은 당신이 생기 넘치고 매력적인 한편 현실적이기도 하다고 생각합니다. 당신이 인기 있는 데다가 침착함과 꾸밈없는 솔직함까지 지녔다고 생각하죠. 또한 당신이 언제나 친구들을 위하는 이해심 많고 사려깊은 사람이라고 생각합니다.'
  },
  {
    from: 28,
    to: 32,
    name: '중국, 모로코',
    desc: '사람들은 당신이 흥분을 잘 하고 다소 충동적이라고 생각합니다. 하지만 당신은 타고난 리더입니다! 의사 결정도 빠르게 내리죠. 사람들은 당신을 대범하고 모험심이 강한 사람으로 생각합니다. 또한 당신의 열정을 인정하고 높이 사기 때문에 당신의 동료, 친구로서 지내기를 좋아합니다.'
  },
  {
    from: 32,
    to: 36,
    name: '칠레, 일본',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  },
  {
    from: 36,
    to: 40,
    name: '미국, 남아프리카 공화국',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  },
  {
    from: 40,
    to: 44,
    name: '베트남, 이집트',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  },
  {
    from: 44,
    to: 47,
    name: '쿠바, 스페인',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  },
  {
    from: 47,
    to: 50,
    name: '브라질, 멕시코',
    desc: '사람들은 당신을 조심해서 대해야 할 사람으로 생각합니다. 때때로 당신이 약간 자기중심적이고 남들을 지배하려는 경향이 있다고도 생각하죠. 어떤 사람들은 당신을 존경하고 당신처럼 되고 싶어하지만, 한편으로는 당신과 깊이 엮이는 걸 주저하기도 합니다.'
  }
]