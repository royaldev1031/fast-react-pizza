var subsets = function (nums) {
  const res = [[]];

  function dfs(index, current) {
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      res.push([...current]);
      dfs(i + 1, current);

      //back track
      current.pop();
    }
  }

  dfs(0, []);
  return res;
};

subsets([1, 2, 3]);
