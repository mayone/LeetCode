/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
   public:
    void deleteNode(ListNode* node) {
        ListNode* deleted = node->next;
        node->val = deleted->val;
        node->next = deleted->next;
        delete (deleted);
    }
};