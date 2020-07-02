/*
 * @lc app=leetcode.cn id=1 lang=php
 *
 * [1] 两数之和
 */

// @lc code=start
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        for($i=0;$i<=count($nums);$i++){
            for($j=0;$j<=count($nums);$j++){
                if($i==$j){
                    break;
                }
                $flag = $nums[$i]+$nums[$j];
                if($flag == $target){
                    return (array($i,$j));
                }
            }
        }
    }
}
// @lc code=end

