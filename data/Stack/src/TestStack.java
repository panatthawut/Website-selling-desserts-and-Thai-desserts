
public class TestStack {
	public static void main(String[] args) {
		StackOp st = new StackOp();
		st.push(1);
		st.printStack();
		st.push(1);
		st.printStack();
		st.pop();
		st.printStack();
		st.pop();
		st.printStack();
		st.pop();
		st.printStack();
		st.push(3);
		st.printStack();
		st.push(4);
		st.printStack();
		st.pop();
		st.printStack();
		st.push(8);
		st.pop();
		st.printStack();
		st.printStack();
		st.push(9);
		st.printStack();
		st.pop();
		st.printStack();
		st.push(10);
		st.printStack();
		st.pop();
		st.printStack();
		st.pop();
		st.printStack();
		st.push(5);
		st.printStack();
		st.push(6);
		st.printStack();
		System.out.println("top:"+st.top);
	}
}
