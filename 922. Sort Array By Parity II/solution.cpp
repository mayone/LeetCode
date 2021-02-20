class Solution {
   public:
    vector<int> sortArrayByParityII(vector<int> &A) { return oneForloop(A); }

    vector<int> oneForloop(vector<int> &A) {
        const int lenA = A.size();
        vector<int> sortedA(lenA);
        int evenIdx = 0;
        int oddIdx = 1;

        for (int i = 0; i < lenA; i++) {
            int val = A[i];
            if ((val & 1) == 0) {
                sortedA[evenIdx] = val;
                evenIdx += 2;
            } else {
                sortedA[oddIdx] = val;
                oddIdx += 2;
            }
        }
        return sortedA;
    }

    vector<int> twoForloop(vector<int> &A) {
        const int lenA = A.size();
        for (int i = 0; i < lenA; i++) {
            for (int j = i; j < lenA; j++) {
                if ((A[j] & 1) == (i & 1)) {
                    int temp = A[j];
                    A[j] = A[i];
                    A[i] = temp;
                    break;
                }
            }
        }
        return A;
    }
};
