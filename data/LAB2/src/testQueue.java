import java.util.Scanner;

public class testQueue {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner kb = new Scanner(System.in);
		System.out.print("Plese input size Array A : ");
		int size=kb.nextInt();
		
		ArrayQueue arrayA = new ArrayQueue(size);
		
		
		int menu=0;
		while(menu!=4){
			
			System.out.println("Menu");
			System.out.println("1.enqueue");
			System.out.println("2.dequeue");
			System.out.println("3.shoe data");
			System.out.println("4.exit");
			System.out.print("Please choose your choice : ");
			menu = kb.nextInt();
			if(menu == 1) {
				System.out.print("Input data : ");
				int newData=kb.nextInt();
				arrayA.enqueue(newData);
				
			}else if(menu == 2) {
				arrayA.dequeue();
				
			}else if(menu == 3) {
				arrayA.printQueue();
				
			}
			
		}
		System.out.println("Thank you ...");
		
	}
}
