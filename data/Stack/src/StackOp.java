
public class StackOp {
	static int top=-1;
	static int []s= new int[5];
	
	
	static void push(int item) {
		if(top!=s.length-1) {
			top=top+1;
			s[top]=item;
		}else {
			
			System.out.print("stack full");
		}
	}
	static int pop() {
		int item =-1;
		if(top>=0) {
			item=s[top];
			top=top-1;
			return item ;
		}
		return 0;
	}
	static int getTop() {
		return top;
	}
	public static void printStack() {
		System.out.println("Data in stack");
		
		for(int i=top;i>=0;i--) {
			System.out.print(s[i]+" ");
			}
		System.out.println();
	}
}
