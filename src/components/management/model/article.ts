import type { Reducer, Effect, Subscription } from 'umi'

interface articleModelType {
  namespace: "artile";
  state: {};
  reducer: {
    getList: Reducer;
  };
  effect: {
    getRemote: Effect;
    goEdit: Effect;
  };
  subscriptions: {
    pathChange: Subscription;
  }
}
