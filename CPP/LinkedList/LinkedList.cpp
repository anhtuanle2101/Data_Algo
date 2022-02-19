#include <stdlib.h>
#include <stdio.h>

struct Node
{
    int data;
    Node *next;
};

Node *Insert(Node *head, int x)
{
    struct Node *temp = (Node *)malloc(sizeof(struct Node));
    temp->data = x;
    temp->next = head;
    head = temp;
    return head;
}

void Print(Node *head)
{
    struct Node *temp = head;
    printf("The current List is:");
    while (temp != NULL)
    {
        printf(" %d", temp->data);
        temp = temp->next;
    }
    printf("\n");
}

int main()
{
    Node *head = NULL; //empty list
    printf("How many numbers?\n");
    int n, i, x;
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("Enter the number \n");
        scanf("%d", &x);
        head = Insert(head, x);
        Print(head);
    }
}