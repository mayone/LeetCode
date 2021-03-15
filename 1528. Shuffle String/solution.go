package solution

func restoreString(s string, indices []int) string {
	ret := make([]rune, len(s))
	for idx, val := range s {
		ret[indices[idx]] = val
	}
	return string(ret)
}
